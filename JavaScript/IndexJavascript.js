const container = document.querySelector('#container');
const addedRedPar = document.createElement('p');
const addH3Tag = document.createElement('h3');
const addPinkDiv = document.createElement('div');
const h1 = document.createElement('h1');
const paragraphTag = document.createElement('p');
const btn = document.querySelectorAll('button');




//Changing and adding tags to the DOM
addedRedPar.style.color = 'red';
addedRedPar.textContent = "Hi i'm Red";

addH3Tag.style.color = "blue";
addH3Tag.textContent = "I'm blue H3";

addPinkDiv.style.backgroundColor = 'pink';
addPinkDiv.style.border = "2px solid black";

h1.textContent = "I'm in a div";
paragraphTag.textContent = "ME TOO";

/*
btn.onclick = () => alert("Hello World From JavaScript");

btn.addEventListener('click', function (e) 
{
    console.log(e);
})
*/

/*
btn.forEach((button) =>{
    button.addEventListener('click', () => {
        alert(button.id);
    })
})
*/

//Testing the bbarcode genetor

function MakeBarcode ()
{
    let text = document.getElementById("text").value;
    JsBarcode("#barcode", text);
}

btn.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id == "clearButton")
        {
            paragraphTag.textContent = "You Clicked the Clear button";
            alert("We cleared the information for you and printed to the screen");
        }
        else if(button.id == "barcodeButton")
        {
           MakeBarcode();
        }
        else 
        {
            alert("You clicked " + button.id);
        }
    })
})


//Inserting the Tags into the HTML page
container.appendChild(addedRedPar);
container.appendChild(addH3Tag);
container.append(addPinkDiv);
addPinkDiv.appendChild(h1);
addPinkDiv.appendChild(paragraphTag);



