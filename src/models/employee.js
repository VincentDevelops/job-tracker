import { person } from "./person.js";

export const employee = (fName, lname) => {
    const firstName = fName;
    const lastName = lname;
    const assignedJobs = new Map();
    const completedJobs = new Map();

    const assignJob = (job) => {
        assignedJobs.set(job.getId(), job.getTitle());
    }

    const completeJob = (job) => {
        assignedJobs.delete(job.getId());
        completedJobs.set(job.getId(), job.getTitle());
    }

    const getAssignedJobs = () => assignedJobs;
    const getCompletedJobs = () => completedJobs;


    return Object.assign(
        { assignJob, completeJob, getAssignedJobs, getCompletedJobs },
        person(firstName, lastName),
    )
}