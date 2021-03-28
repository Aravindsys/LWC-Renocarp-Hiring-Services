import { LightningElement, api,wire } from 'lwc';
import getAllReviews from '@salesforce/apex/JobDataService.getAllReviews';
import getAllReviewsFromImper from '@salesforce/apex/JobDataService.getAllReviewsFromImper';

export default class ViewReviews extends LightningElement {

 @api
 positionId;

 reviews;
 error;



 @wire(getAllReviews, {positionId: '$positionId'})
 initialExecute({data,error}){
    if(data){
        this.reviews = data;
    }
 }

 @api
 updateReviews(){
     getAllReviewsFromImper({
         positionId: this.positionId
        })
     .then(reviews => {
       
         this.reviews = reviews;
         
         const updatedEvent = new CustomEvent('gotnewreviews');
         this.dispatchEvent(updatedEvent);

     })
     .catch(error => {
        this.error = error;
     });
 }

 @api
 isLoading;

}