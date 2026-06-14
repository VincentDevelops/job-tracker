// Temporary front end

import { person } from "./person.js"

export const customer = (fName, lName) => {
    const firstName = fName;
    const lastName = lName;
    let balance = 0;

    const getBalance = () => balance;

    return Object.assign(
        { getBalance },
        person(firstName, lastName),
    );
}