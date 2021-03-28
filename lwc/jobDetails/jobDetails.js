import { LightningElement,wire } from 'lwc';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
import POSITION from '@salesforce/messageChannel/Position__c';
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

const COLUMNS = [NAME_FIELD,JOB_ROLE_FIELD,COMPANY_FIELD,CONTACT_PERSON_FIELD,
               EMAIL_FIELD,PHONE_FIELD,AGE_FIELD,EXPERIENCE_FIELD,SALARY_FIELD,
            JOB_DESCRIPTION_FIELD,JOB_SATISFACTION_INDEX_FIELD];



import {subscribe,MessageContext} from 'lightning/messageService';

export default class JobDetails extends LightningElement {

    @wire(getRecord,{recordId: "$positionId", fields: COLUMNS})
    position;
    
    positionId = '';
    subscription = null;
    
    @wire(MessageContext)
    messageContext;

    isLoadingReview = false;

    connectedCallback(){
      this.subscription = subscribe(this.messageContext,POSITION,(data) => {
          this.positionId = data.positionId;
        });
    }   
    stopLoading(event){
       this.isLoadingReview = false;
       this.template.querySelector('lightning-tabset').activeTabValue = 'reviews';
    }

    updateReview(event){
      this.isLoadingReview = true;
      this.template.querySelector('c-view-reviews').updateReviews();
    }
}