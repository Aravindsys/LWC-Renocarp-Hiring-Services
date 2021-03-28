import { LightningElement,api,wire } from 'lwc';
import getPositions from '@salesforce/apex/JobDataService.getPositions';
import POSITION from '@salesforce/messageChannel/Position__c';
import {publish,MessageContext} from 'lightning/messageService';

export default class JobSearchResults extends LightningElement {

    @api
    jobRoleId;

    @wire(MessageContext)
    messageContext;

    @wire(getPositions, {jobRoleId: "$jobRoleId"})
    positions; 
    
    selectedPositionId = '';

    selectedPosition(event){
        this.selectedPositionId = event.target.name;
        publish(this.messageContext,POSITION,{positionId: this.selectedPositionId});
    }

}