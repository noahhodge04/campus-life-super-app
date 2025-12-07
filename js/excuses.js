const excuseContainer = document.querySelector("#excuse-container");
const schoolButton = document.querySelector("#school-button");
const partyButton = document.querySelector("#party-button");
const unbelievableButton = document.querySelector("#unbelievable-button");

schoolButton.addEventListener("click", function(){
    getExcuse("college");
});

partyButton.addEventListener("click", function(){
    getExcuse("party");
});

unbelievableButton.addEventListener("click", function(){
    getExcuse("unbelievable");
});

async function getExcuse(topic) {
    let endpoint = "https://excuser-three.vercel.app/v1/excuse/";
    const response = await fetch(endpoint + topic);
    const data = await response.json();
    const text = data[0].excuse;

    excuseContainer.textContent = text;
}