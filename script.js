function runProgram(){
    fetchData();
    console.log('runProgram');
    //your code goes here
}

const apiUrl = 'https://api.brawlapi.com/v1/brawlers';

async function fetchData(){
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    // Do something with the response data
    console.log(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

document.addEventListener('DOMContentLoaded', runProgram);