let allBrawlers = []

function runProgram(){
    fetchData();
    console.log('runProgram');
    const searchButton = document.querySelector('#search-button');
    searchButton.addEventListener('click', showBrawler);
    searchButton.addEventListener('click', showBrawlerRarity);
    searchButton.addEventListener('click', showBrawlerImage);
    searchButton.addEventListener('click', showBrawlerDescription);
    searchButton.addEventListener('click', showBrawlerG1Name);
    searchButton.addEventListener('click', showBrawlerG2Name);
    searchButton.addEventListener('click', showBrawlerG1Description);
    searchButton.addEventListener('click', showBrawlerG1Image);
    searchButton.addEventListener('click', showBrawlerG2Description);
    searchButton.addEventListener('click', showBrawlerG2Image);
    searchButton.addEventListener('click', showBrawlerS1Name);
    searchButton.addEventListener('click', showBrawlerS1Description);
    searchButton.addEventListener('click', showBrawlerS1Image);
    searchButton.addEventListener('click', showBrawlerS2Name);
    searchButton.addEventListener('click', showBrawlerS2Description);
    searchButton.addEventListener('click', showBrawlerS2Image);
}
const apiUrl = `https://api.brawlapi.com/v1/brawlers`;

async function showBrawler(){
    const searchInput = document.querySelector('#search-input');
    const searchValue = searchInput.value;

for (const currBrawler of allBrawlers) {

  if(currBrawler.hash === searchValue){
    console.log("working");
    const BrawlerName = document.querySelector("#brawler-name");
    BrawlerName.textContent = currBrawler.hash;
    alert("Bralwer Found!");

  }
}
}

async function showBrawlerRarity(){

  const searchInput = document.querySelector('#search-input');
  const searchValue = searchInput.value;

for (const currBrawler of allBrawlers) {

  if(currBrawler.hash === searchValue){
    const BrawlerRarity = document.querySelector("#rarity");
    BrawlerRarity.textContent = currBrawler.rarity.name;

  }
}
}

async function showBrawlerImage(){

  const searchInput = document.querySelector('#search-input');
  const searchValue = searchInput.value;

for (const currBrawler of allBrawlers) {

  if(currBrawler.hash === searchValue){
    const BrawlerImage = document.querySelector("#sprite");
    BrawlerImage.src = currBrawler.imageUrl;

  }

}
}

async function showBrawlerDescription(){

  const searchInput = document.querySelector('#search-input');
  const searchValue = searchInput.value;

for (const currBrawler of allBrawlers) {

  if(currBrawler.hash === searchValue){
    const BrawlerDescription = document.querySelector("#about");
    BrawlerDescription.textContent = currBrawler.description;

  }
}
}

async function showBrawlerG1Name(){

  const searchInput = document.querySelector('#search-input');
  const searchValue = searchInput.value;

for (const currBrawler of allBrawlers) {

  if(currBrawler.hash === searchValue){
    const BrawlerG1Name = document.querySelector("#g1-name");
    BrawlerG1Name.textContent = currBrawler.gadgets[0].name;

  }
}
}


async function showBrawlerG1Description(){

  const searchInput = document.querySelector('#search-input');
  const searchValue = searchInput.value;

for (const currBrawler of allBrawlers) {

  if(currBrawler.hash === searchValue){
    const BrawlerG1Description = document.querySelector("#g1-description");
    BrawlerG1Description.textContent = currBrawler.gadgets[0].description;

  }
}
}

async function showBrawlerG1Image(){

  const searchInput = document.querySelector('#search-input');
  const searchValue = searchInput.value;

for (const currBrawler of allBrawlers) {

  if(currBrawler.hash === searchValue){
    const BrawlerG1Image = document.querySelector("#g1-img");
    BrawlerG1Image.src = currBrawler.gadgets[0].imageUrl;

  }
}
}


async function showBrawlerG2Name(){

  const searchInput = document.querySelector('#search-input');
  const searchValue = searchInput.value;

for (const currBrawler of allBrawlers) {

  if(currBrawler.hash === searchValue){
    const BrawlerG2Name = document.querySelector("#g2-name");
    BrawlerG2Name.textContent = currBrawler.gadgets[1].name;

  }
}
}

async function showBrawlerG2Description(){

  const searchInput = document.querySelector('#search-input');
  const searchValue = searchInput.value;

for (const currBrawler of allBrawlers) {

  if(currBrawler.hash === searchValue){
    const BrawlerG2Description = document.querySelector("#g2-description");
    BrawlerG2Description.textContent = currBrawler.gadgets[1].description;

  }
}
}

async function showBrawlerG2Image(){

  const searchInput = document.querySelector('#search-input');
  const searchValue = searchInput.value;

for (const currBrawler of allBrawlers) {

  if(currBrawler.hash === searchValue){
    const BrawlerG2Image = document.querySelector("#g2-img");
    BrawlerG2Image.src = currBrawler.gadgets[1].imageUrl;

  }
}
}

async function showBrawlerS1Name(){

  const searchInput = document.querySelector('#search-input');
  const searchValue = searchInput.value;

for (const currBrawler of allBrawlers) {

  if(currBrawler.hash === searchValue){
    const BrawlerS1Name = document.querySelector("#s1-name");
    BrawlerS1Name.textContent = currBrawler.starPowers[0].name;

  }
}
}


async function showBrawlerS1Description(){

  const searchInput = document.querySelector('#search-input');
  const searchValue = searchInput.value;

for (const currBrawler of allBrawlers) {

  if(currBrawler.hash === searchValue){
    const BrawlerS1Description = document.querySelector("#s1-description");
    BrawlerS1Description.textContent = currBrawler.starPowers[0].description;

  }
}
}

async function showBrawlerS1Image(){

  const searchInput = document.querySelector('#search-input');
  const searchValue = searchInput.value;

for (const currBrawler of allBrawlers) {

  if(currBrawler.hash === searchValue){
    const BrawlerS1Image = document.querySelector("#s1-img");
    BrawlerS1Image.src = currBrawler.starPowers[0].imageUrl;

  }
}
}

async function showBrawlerS2Name(){

  const searchInput = document.querySelector('#search-input');
  const searchValue = searchInput.value;

for (const currBrawler of allBrawlers) {

  if(currBrawler.hash === searchValue){
    const BrawlerS2Name = document.querySelector("#s2-name");
    BrawlerS2Name.textContent = currBrawler.starPowers[1].name;

  }
}
}


async function showBrawlerS2Description(){

  const searchInput = document.querySelector('#search-input');
  const searchValue = searchInput.value;

for (const currBrawler of allBrawlers) {

  if(currBrawler.hash === searchValue){
    const BrawlerS2Description = document.querySelector("#s2-description");
    BrawlerS2Description.textContent = currBrawler.starPowers[1].description;

  }
}
}

async function showBrawlerS2Image(){

  const searchInput = document.querySelector('#search-input');
  const searchValue = searchInput.value;

for (const currBrawler of allBrawlers) {

  if(currBrawler.hash === searchValue){
    const BrawlerS2Image = document.querySelector("#s2-img");
    BrawlerS2Image.src = currBrawler.starPowers[1].imageUrl;

  }
}
}


async function fetchData(){

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    allBrawlers = data.list
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

document.addEventListener('DOMContentLoaded', runProgram);