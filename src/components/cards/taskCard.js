import { card } from "./card.js";
import { cardDetails } from "./cardDetails.js"
import { cardHeader } from "./cardHeader.js"

export function taskCard(jobTitle, customer, job, tag) {

    const header = cardHeader(jobTitle);
    const details = cardDetails(customer, job, tag);

    const mycard = card([header, details]);

    return mycard;

}