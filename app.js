let loader = document.getElementById('load');
loader.style.display = 'none'
let countryName = document.querySelector('#country-name');
const covidInfo = async () => {
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    loader.style.display = 'block'
    const url = `https://api.covid19api.com/live/country/${inputFieldValue}`;


    if (inputFieldValue === '') {
        countryName.innerText = 'Write valid name'
        loader.style.display = 'none'
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

    const covidCase = document.querySelector('#covid-case');
    const covidDeath = document.querySelector('#covid-death');
    const covidRecover = document.querySelector('#covid-recover');

    try{
        countryName.innerText = `${data[0].Country}`
        covidCase.innerText = `${data[0].Confirmed}`
        covidDeath.innerText = `${data[0].Deaths}`
        covidRecover.innerText = `${data[0].Recovered}`
    } catch (err) {
        countryName.innerText = `Not found`
   }

}