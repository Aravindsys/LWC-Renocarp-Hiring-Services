import { LightningElement,wire} from 'lwc';
import getJobTypes from '@salesforce/apex/JobDataService.getJobTypes';
import getJobRoles from '@salesforce/apex/JobDataService.getJobRoles';

export default class JobSearchForm extends LightningElement {
    selectedJobTypeId = '';
    selectedJobRoleId = '';

    @wire(getJobTypes)
    jobTypes;

    jobRoleOptions;

    @wire(getJobRoles, {jobTypeId: "$selectedJobTypeId"})
    jobRoles({data,error}){
        if(data){
         this.jobRoleOptions = data.map(jr => {return {label: jr.Name, value: jr.Id}});
        }
    }

    updateJobRole(event){
       this.selectedJobTypeId = event.detail.value;
    }

    get jobTypeOptions(){
        if(this.jobTypes.data){
        const results = this.jobTypes.data.map(jt => {
            return {label: jt.Name,
                    value: jt.Id
            }
        });
        return results;
    }
    else{
        return {}
    }
}

    handleChange(event){
       this.selectedJobRoleId = event.detail.value;
       const jobRoleEvent = new CustomEvent('jobroleselect',{
           detail: this.selectedJobRoleId
       });
       this.dispatchEvent(jobRoleEvent);
    }


}