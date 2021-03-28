import { LightningElement, wire, api } from 'lwc';

import {getRecord,getFieldValue} from 'lightning/uiRecordApi';

import REVIEW_OBJECT from '@salesforce/schema/Review__c';
import NAME_FIELD from '@salesforce/schema/Review__c.Name';
import COMMENT_FIELD from '@salesforce/schema/Review__c.Comment__c';
import RATING_FIELD from '@salesforce/schema/Review__c.Rating__c';
import POSITION_FIELD from '@salesforce/schema/Review__c.Position__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import POSITION_NAME_FIELD from '@salesforce/schema/Position__c.Name';

export default class AddReview extends LightningElement {
    @api
    positionId;

    positionNameReview;
    error;

    @wire(getRecord, {recordId: '$positionId', fields:[POSITION_NAME_FIELD]})
    positionName({data,error}){
        if(data){
             this.positionNameReview = getFieldValue(data,POSITION_NAME_FIELD);
        }
        else if(error){
            this.error = error;
        }
    }

   

    review_object = REVIEW_OBJECT;
    nameField = NAME_FIELD;
    commentField = COMMENT_FIELD;
    ratingField = RATING_FIELD;

    handleSuccess(event){
        const reviewId = event.detail.id;
        const toastEvent = new ShowToastEvent({
            title: 'Review Created',
            message: 'Review created successfully',
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
        this.handleReset();
        const reviewUpdate = new CustomEvent('reviewupdate');
        this.dispatchEvent(reviewUpdate);

    }

    handleReset() { 
        
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
    }


    handleSubmit(event){
     event.preventDefault();
     const fields = event.detail.fields;
     fields.Position__c = this.positionId;
     this.template.querySelector('lightning-record-edit-form').submit(fields);

    }

}