public with sharing class JobDataService {
    
    @AuraEnabled(cacheable=true)
    public static List<JobType__c> getJobTypes(){
        return [select Id,Name from JobType__c];
    }

    @AuraEnabled(cacheable=true)
    public static List<JobRole__c> getJobRoles(Id jobTypeId){
        return [select Id,Name from JobRole__c
                where JobType__r.Id = :jobTypeId];
    }

    @AuraEnabled(cacheable=true)
    public static List<Position__c> getPositions(Id jobRoleId){
        return [select Id,Name,JobRole__r.Name,Company__r.Name
            from Position__c
            where JobRole__r.Id = :jobRoleId]; 
    }

    @AuraEnabled(cacheable=true)
    public static List<Review__c> getAllReviews(Id positionId){
        return [select Id,Name,Comment__c,Rating__c,CreatedDate from Review__c
        where Position__r.Id = :positionId
        order by CreatedDate desc];
    }

    @AuraEnabled
    public static List<Review__c> getAllReviewsFromImper(Id positionId){
        return [select Id,Name,Comment__c,Rating__c,CreatedDate from Review__c
        where Position__r.Id = :positionId
        order by CreatedDate desc];
    }

    @AuraEnabled(cacheable=true)
    public static Position__c getMapLocation(Id positionId){
        return [select Id,Name,Company__r.Name,Company__r.Geolocation__Latitude__s,
        Company__r.Geolocation__Longitude__s
        from Position__c where Id = :positionId];
    }


}
