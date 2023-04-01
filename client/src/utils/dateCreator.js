


export const dateCreator = (rawTime) => {

    const timestamp = rawTime;
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString();
 
     return formattedDate
}