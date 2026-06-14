export function levelTag(level) {
    const tag = document.createElement("div");
    tag.classList.add("tag");

    if (level && (level === "low" || level === "med" || level === "high"))
        tag.classList.add(`tag__${level}`);
    else
        tag.classList.add("tag__low");

    tag.textContent = level;

    return tag;
}