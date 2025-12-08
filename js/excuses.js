/* Locates button for each excuse type and the output container for the retrieved excuses */
const excuseContainer = document.querySelector("#excuse-container");
const schoolButton = document.querySelector("#school-button");
const partyButton = document.querySelector("#party-button");
const unbelievableButton = document.querySelector("#unbelievable-button");

/* Click event listeners for each of the buttons */
schoolButton.addEventListener("click", function(){
    getExcuse("college");
});

partyButton.addEventListener("click", function(){
    getExcuse("party");
});

unbelievableButton.addEventListener("click", function(){
    getExcuse("unbelievable");
});

/* Standard JSON call to the Excuser API */
async function getExcuse(topic) {
    let endpoint = "https://excuser-three.vercel.app/v1/excuse/";
    const response = await fetch(endpoint + topic);
    const data = await response.json();
    const text = data[0].excuse;

    /* Outputs only one excuse at a time; if the user wants a different one, they hit another button */
    excuseContainer.textContent = text;
}