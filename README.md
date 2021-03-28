# LWC-Renocarp-Hiring-Services
This repository contains the source code for custom app developed on Salesforce using Lightning Web Components


This app contains 3 lwc components as Parent Components and some child components nested within them
1) JobSearch component
2) JobDetails component
3) JobLocation componet

JobSearch Component:
              This component allows users to filter any specific job with job type and job role and then lists them separately in its nested child component.
              The list of components is displayed in JobSearchResults component. Whenever a Job Position is selected, the details are viewed in JobDetails component.
          
JobDetails Component:
             It consists of lightning-tabset with 3 tabs separated for viewing the details of the job, to add a review for the Job Position being selected and to view
             the lists of existing reviews for a particular Job Position
            
 JobLication Components:
             As the name indicates, it displays the location of the Job in the Map. It uses the lightning-map basic component from LWC and fetches the data for Latitude 
             and Longitude from the Job's company location.
             
 If you completed the LWC specialist superbadge, this could be much more similar to that. If you want to view this in your salesforce org.
 Create the custom objects and fields as per used in the code. Input some dummy data into those objects
 And push this cloned GitHub repository direclty into your org and place the components in a single Lightning Page using Lightning App Builder 
 and you are ready to use it.............
