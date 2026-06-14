export function card(elements = []) {
    const card = document.createElement("article");
    card.classList.add("card");

    if (elements)
        card.append(...elements);

    return card;
}