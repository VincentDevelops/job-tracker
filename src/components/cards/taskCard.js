import { card } from "./card.js";
import { cardDetails } from "./cardDetails.js"
import { cardHeader } from "./cardHeader.js"

export function taskCard(jobTitle, customer, job, tag) {

    const header = cardHeader(jobTitle);
    const details = cardDetails(customer, job, tag);

    const cutId = job.getId().slice(31, 36);
    const id = document.createElement("div");
    id.textContent = `Job Id: ${cutId}`;

    details.prepend(id);

    const myCard = card([header, details]);
    myCard.dataset.jobId = job.getId();

    return myCard;

}