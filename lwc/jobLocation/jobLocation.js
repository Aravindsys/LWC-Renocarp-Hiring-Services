import { LightningElement, wire } from 'lwc';
import {subscribe,MessageContext} from 'lightning/messageService';
import getMapLocation from '@salesforce/apex/JobDataService.getMapLocation';
import POSITION from '@salesforce/messageChannel/Position__c';

export default class JobLocation extends LightningElement {
 
    @wire(MessageContext)
    messageContext;

    Latitude;
    Longitude;
    company;
    positionName;

    error;
    positionId = '';

    mapMarkers;

    connectedCallback(){
        subscribe(this.messageContext,POSITION,(message) =>{
            this.positionId = message.positionId;
        });
    }

    @wire(getMapLocation, {positionId: "$positionId"})
    updateMap({data, error}){
        if(data){
        this.company = data.Company__r.Name;
        this.positionName = data.Name;
        this.Latitude = data.Company__r.Geolocation__Latitude__s;
        this.Longitude = data.Company__r.Geolocation__Longitude__s;
        this.putOnMap(this.Latitude,this.Longitude);   
    }
        else if(error){
          this.error = error;
        }

    }

    putOnMap(Latitude,Longitude){
        this.mapMarkers = [{
            title: this.positionName,
            description: this.company,
            location: {Latitude,Longitude},
            icon: "utility:animal_nature"
        }]; 
    }

    }