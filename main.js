let card = document.querySelector(".card");
let inputNumber = document.getElementById("inputNumber");
let numberFacts = document.getElementById("numberFacts");
let YourFactText = document.getElementById("YourFactText");

//inputNumber.addEventListener("input", getFactAjax);


// AJAX
function getFactAjax() {
    let number = inputNumber.value;
    console.log(number);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://numbersapi.com/` + number);
    xhr.onload = function () {
        if (this.status === 200 && number != "") {
            console.log(this.responseText);
            numberFacts.style.display = 'block';
            numberFacts.innerHTML = this.responseText;
            YourFactText.innerHTML = `Your facts...`

        }
    }
    xhr.send();
}

inputNumber.addEventListener("input", getFactFetch);


// FETCH API
function getFactFetch() {
    let number = inputNumber.value;
    let url = `http://numbersapi.com/` + number;
    fetch(url)
        .then(response => {
            return response.text();
        })
        .then(data => {
            if(number != ""){
                console.log(data);
                numberFacts.style.display = 'block';
                numberFacts.innerHTML = data;
                YourFactText.innerHTML = `Your facts...`
    
            }
            
        })
        .catch(error => {
            console.log(error);
        })
}