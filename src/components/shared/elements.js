export function createHeader(level, text, classes = []) {
    if (level < 1 || level > 6)
        return null;

    const header = document.createElement(`h${level}`);
    header.textContent = text;

    if (classes)
        header.classList.add(...classes);

    return header;
}

export function createPar(text, classes = []) {
    const par = document.createElement("p");
    par.textContent = text;

    if (classes)
        par.classList.add(...classes);

    return par;
}

export function createSpan(text, classes = []) {
    const span = document.createElement("span");
    span.textContent = text;

    if (classes)
        span.classList.add(...classes);

    return span;
}

export function createButton(innerText, classes = []) {
    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = innerText;

    if (classes)
        button.classList.add(...classes);

    return button;
}

export function createImage(source, alt, classes = []) {
    const image = document.createElement("img");
    image.src = source;
    image.alt = alt;
    image.classList.add(...classes);

    return image;
}