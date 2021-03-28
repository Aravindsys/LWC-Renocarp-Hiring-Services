import { LightningElement } from 'lwc';

export default class JobSearch extends LightningElement {

    selectedJobRoleId = '';

    updateSelectedJobRoleId(event){
        this.selectedJobRoleId = event.detail;
    }

}