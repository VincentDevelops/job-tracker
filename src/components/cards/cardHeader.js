import eIcon from "../../Assets/Icons/fi-rs-edit.svg";
import iIcon from "../../Assets/Icons/fi-rs-info.svg";
import { createImage } from "../shared/elements.js";

export function cardHeader(title) {
    const header = document.createElement("div");
    header.classList.add("card__header");

    const cardTitle = document.createElement("span")
    cardTitle.classList.add("card__title");
    cardTitle.textContent = title;

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("card__buttons");

    const editIcon = createImage(eIcon, "edit", ["icon", "icon__action"]);
    const infoIcon = createImage(iIcon, "information", ["icon", "icon__action"]);

    buttonsContainer.append(editIcon, infoIcon);

    header.append(cardTitle, buttonsContainer);

    return header;
}