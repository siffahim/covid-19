let loader = document.getElementById('load');
loader.style.display = 'none'
let countryName = document.querySelector('#country-name');
let covidCase = document.querySelector('#covid-case');
let covidDeath = document.querySelector('#covid-death');
let covidRecover = document.querySelector('#covid-recover');

const covidInfo = async () => {
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    loader.style.display = 'block'
    const url = `https://api.covid19api.com/live/country/${inputFieldValue}`;


    if (inputFieldValue === '') {
        countryName.innerText = 'Write valid name'
        loader.style.display = 'none'
        covidCase.innerText = '0'
        covidDeath.innerText = '0'
        covidRecover.innerText = '0'
    }
    else {
        
        const covidData = await fetch(url);
        const data = await covidData.json();
        loader.style.display = 'none'

        showCovidCase(data)
    }


    inputField.value = '';
}


const showCovidCase = (data) => {

    countryName.innerText = '0'
    covidCase.innerText = '0'
    covidDeath.innerText = '0'
    covidRecover.innerText = '0'

    try{
        countryName.innerText = `${data[0].Country}`
        covidCase.innerText = `${data[0].Confirmed}`
        covidDeath.innerText = `${data[0].Deaths}`
        covidRecover.innerText = `${data[0].Recovered}`
    } catch (err) {
        countryName.innerText = `Not found`
   }

}