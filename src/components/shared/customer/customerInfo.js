import iconSrc from "../../../Assets/Icons/fi-rs-location-alt.svg";
import { createImage } from "../elements.js";

export function customerInfo(cust, job) {
    const container = document.createElement("div");
    container.classList.add("customer__information");

    const custName = document.createElement("div");
    custName.classList.add("customer__name");
    custName.textContent = cust.getName();

    const jobSite = document.createElement("div");
    jobSite.classList.add("customer__location");

    const icon = createImage(iconSrc, "location", "icon");

    const address = document.createElement("address");
    address.classList.add("customer__address");
    address.textContent = job.getAddress();

    jobSite.append(icon, address);

    container.append(custName, jobSite);

    return container;
}