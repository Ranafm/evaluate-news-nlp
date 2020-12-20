const { json } = require("body-parser");


const API_Key = 'a9b5d10effe56fa09d6beb0a42072bb1';
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const myURL = 'http://localhost:8081';

function handleSubmit(event) {

    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('name').value
    Client.checkForName(url)
    console.log(API_Key);
    console.log('SUCESS');

    console.log("::: Form Submitted :::")

    getTemp(baseURL, url, API_Key)
        .then(data => {
            console.log('here ' + data.sentimented_entity_list[0]);
            postData(`${myURL}/result`, { temp: data.sentimented_entity_list })
        }).then(() => {
            updateUI()

        })
}

function postData(url = '', data = {}) {
    return fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}


const getTemp = async(baseURL, url, API_Key) => {
    const request = await fetch(`${baseURL}?key=${API_Key}&lang=en&txt=${url}&model=general`)
    try {
        const retrieved = await request.json();
        //console.log(retrieved); 
        return retrieved
    } catch (error) {
        console.log('incorect code', error)
    }
}

const updateUI = async() => {
    const request = await fetch(`${myURL}/res`)
    const data = await request.json();
    console.log(data.type + ' here print');
    document.getElementById('results').innerHTML = `Input text: ${data.form} <br> Type: ${data.type}`;
}
export { handleSubmit }