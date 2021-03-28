import {api, wire, track,LightningElement} from 'lwc';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Position__c.Name';
import JOB_ROLE_FIELD from '@salesforce/schema/Position__c.JobRole__r.Name';
import COMPANY_FIELD from '@salesforce/schema/Position__c.Company__r.Name';
import CONTACT_PERSON_FIELD from '@salesforce/schema/Position__c.Person__r.Name';
import EMAIL_FIELD from '@salesforce/schema/Position__c.Person__r.Email__c';
import PHONE_FIELD from '@salesforce/schema/Position__c.Person__r.Phone__c';
import AGE_FIELD from '@salesforce/schema/Position__c.Age__c';
import EXPERIENCE_FIELD from '@salesforce/schema/Position__c.Experience__c';
import SALARY_FIELD from '@salesforce/schema/Position__c.Salary__c';
import JOB_DESCRIPTION_FIELD from '@salesforce/schema/Position__c.Job_Description__c';
import JOB_SATISFACTION_INDEX_FIELD from '@salesforce/schema/Position__c.Job_Satisfaction_Index__c';
import POSITION from '@salesforce/messageChannel/Position__c';

const COLUMNS = [NAME_FIELD,JOB_ROLE_FIELD,COMPANY_FIELD,CONTACT_PERSON_FIELD,
               EMAIL_FIELD,PHONE_FIELD,AGE_FIELD,EXPERIENCE_FIELD,SALARY_FIELD,
            JOB_DESCRIPTION_FIELD,JOB_SATISFACTION_INDEX_FIELD];

export default class JobDetail extends LightningElement{

    @api
    positionId;

    @wire(getRecord, {recordId: "$positionId", fields: COLUMNS})
    position;

    get positionName(){
        return getFieldValue(this.position.data,NAME_FIELD);
    }
    get jobRoleName(){
        return getFieldValue(this.position.data,JOB_ROLE_FIELD);
    }
    get companyName(){
        return getFieldValue(this.position.data,COMPANY_FIELD);
    }
    get personName(){
        return getFieldValue(this.position.data,CONTACT_PERSON_FIELD);
    }
    get personEmail(){
        return getFieldValue(this.position.data,EMAIL_FIELD);
    }
    get personPhone(){
        return getFieldValue(this.position.data,PHONE_FIELD);
    }
    get positionName(){
        return getFieldValue(this.position.data,NAME_FIELD);
    }
    get age(){
        return getFieldValue(this.position.data,AGE_FIELD);
    }
    get salary(){
        return getFieldValue(this.position.data,SALARY_FIELD);
    }
    get experience(){
        return getFieldValue(this.position.data,EXPERIENCE_FIELD);
    }
    get jobDescription(){
        return getFieldValue(this.position.data,JOB_DESCRIPTION_FIELD);
    }
    get jobSatisfactionIndex(){
        return getFieldValue(this.position.data,JOB_SATISFACTION_INDEX_FIELD);
    }

}