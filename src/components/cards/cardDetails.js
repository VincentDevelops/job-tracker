import calIcon from "../../Assets/Icons/fi-rs-calendar.svg";
import { customerInfo } from "../shared/customer/customerInfo.js";
import { createImage } from "../shared/elements.js"

export function cardDetails(customer, job, tag) {

    if (!customer || !job || !tag)
        return null;

    const details = document.createElement("div");
    details.classList.add("card__details");

    const custInfo = customerInfo(customer, job);

    const due = document.createElement("div");
    const calendarIcon = createImage(calIcon, "calendar", "icon");
    const time = document.createElement("time");
    time.textContent = `Due: ${job.getDueDate()}`;

    due.append(calendarIcon, time);

    const estimate = document.createElement("data");
    estimate.textContent = job.getEstimate();

    details.append(custInfo, due, tag, estimate);

    return details;
}
