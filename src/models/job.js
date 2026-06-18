export const job = (jobTitle, desc) => {
    const jobId = crypto.randomUUID();
    let title = jobTitle;
    let description = desc;
    let assignedEmployeeId = null;
    let customerId = null;
    let address = null;
    let priority = "low";
    let dueDate = null;
    let estimate = null;

    const getId = () => jobId;
    const getAssignedEmployeeId = () => assignedEmployeeId;
    const getCustomerId = () => customerId;
    const getAddress = () => address;
    const getPriority = () => priority;
    const getDueDate = () => dueDate;
    const getEstimate = () => estimate;
    const getTitle = () => title;
    const getDescription = () => description;

    const setAddress = (addr) => {
        address = addr;
    }

    // must use "low", "med", "medium", or "high"
    const setPriority = (level) => {
        if (level !== "low" && level !== "med" && level !== "medium" && level !== "high")
            return;

        priority = level;
    }

    const setDueDate = (date) => {
        dueDate = date;
    }

    const setEstimate = (est) => {
        estimate = `Estimate: $${Number(est).toLocaleString()}`
    }

    const setTitle = (text) => {
        title = text;
    }

    const setDescription = (desc) => {
        description = desc;
    }

    const setEmployeeId = (empId) => {
        assignedEmployeeId = empId;
    }

    const setCustomerId = (id) => {
        customerId = id;
    }

    return {
        getAddress, getAssignedEmployeeId, getCustomerId, getDueDate, getEstimate, getId, getPriority,
        setAddress, setDueDate, setEstimate, setPriority, setEmployeeId, setCustomerId,
        setTitle, setDescription, getTitle, getDescription,
    }



}