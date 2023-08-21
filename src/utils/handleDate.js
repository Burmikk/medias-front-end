const formatedDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes() + 1).padStart(2, "0");

    const newDate = `${day}.${month}.${year} у ${hours}:${minutes}`;
    return newDate;
};

export default formatedDate;
