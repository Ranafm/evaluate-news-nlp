const { json } = require("body-parser");


const API_Key = 'a9b5d10effe56fa09d6beb0a42072bb1';
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const myURL = 'http://localhost:8081';

function handleSubmit(event) {

    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('name').value
    Client.validateUrl(url)
        // console.log(API_Key);
    console.log('SUCESS');
    // postData(`${myURL}/result`, { temp: url })
    console.log("::: Form Submitted :::")
    ostData(`${myURL}/result`, { temp: url })

    console.log('here --99-');


}


function postData(url = '', data = {}) {
    console.log('here fetch 4');
    return fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
        .then(res => condocument.getElementById("results").innerHTML = `<br>Text: ${res.sentence_list.text} <br>Confidence: ${res.confidence}  <br>Subjectivity: ${res.subjectivity} <br>Irony: ${res.irony}`)
}
//document.getElementById("results").innerHTML = `<br>Text: ${res.sentence_list.text} <br>Confidence: ${res.confidence}  <br>Subjectivity: ${res.subjectivity} <br>Irony: ${res.irony}`

export { handleSubmit }