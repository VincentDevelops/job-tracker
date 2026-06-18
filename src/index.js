import "./styles/style.css";
import "./styles/modern-normalize.css";
import "./components/tags/tag.css"
import "./components/cards/card.css"
import "./components/overview/overview.css"
import "./components/shared/icons.css"
import "./components/shared/customer/customer.css"
import "./pages/page.css"
import "./components/navigation/nav.css"
import { customer } from "./models/customer.js"
import { employee } from "./models/employee.js"
import { taskCard } from "./components/cards/taskCard.js"
import { job } from "./models/job.js";
import { person } from "./models/person.js";
import { levelTag } from "./components/tags/levelTag.js"



// creating a overview job card
const cards = document.querySelector(`[data-cards-column="scheduled-column"]`);

const me = customer("Caroline", "Smith");
const myJob = job("Water Heater Removal & Installment", "remove and install a new toilet");
myJob.setAddress("St George, UT");
myJob.setEstimate("2100.50");
myJob.setDueDate("July 1, 2026");
const lowTag = levelTag("low");
const card = taskCard(myJob.getTitle(), me, myJob, lowTag);

cards.appendChild(card);