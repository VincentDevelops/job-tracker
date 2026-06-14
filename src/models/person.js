export const person = (fname, lname) => {
    const id = crypto.randomUUID();
    let firstName = fname;
    let lastName = lname;
    let phone = "";
    let email = "";

    const getId = () => id;
    const getFirstName = () => firstName;
    const getLastName = () => lastName;
    const getName = () => `${firstName} ${lastName}`;
    const getPhone = () => phone;
    const getEmail = () => email;

    const setFirstName = (name) => {
        firstName = name;
    };

    const setLastName = (name) => {
        lastName = name;
    };

    const setPhone = (number) => {
        phone = number;
    }

    const setEmail = (em) => {
        email = em;
    }


    return {
        getId, getFirstName, getLastName, getName, setFirstName, setLastName,
        getPhone, getEmail, setPhone, setEmail,
    };


}