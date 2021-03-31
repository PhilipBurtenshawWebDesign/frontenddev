function init() {

    console.log('init has been called');
    showDate();
    showGreeting();
    setUpListeners();

    clearMessagePanel();

    const planets = ['mercury', 'venus', 'earth'];
    let htmlToWrite = WriteList(planets);
    writeMessagePanel(htmlToWrite);


    const chemicalElements = ["Copper", "Yttrium", "Selenium"];
    htmlToWrite = WriteListMethod2(chemicalElements);
    writeMessagePanel(htmlToWrite, false);


    const wondersOfTheWorld = ["Great Wall of Chin", "Machu Picchu", "Taj Mahal"]
    htmlToWrite = WriteListMethod3(wondersOfTheWorld);
    writeMessagePanel(htmlToWrite);


}

function sum() {

    document.getElementById('messagePanel').innerHTML = 0;

    if (    isNaN(document.getElementById('num1').value) || isNaN(document.getElementById('num2').value) ) {

        document.getElementById('num1').value='';
        document.getElementById('num2').value='';

        return;
    }
    

    var num1 = +document.getElementById('num1').value;
    var num2 = +document.getElementById('num2').value;
    document.getElementById('messagePanel').innerHTML = num1 + num2;

}



function setUpListeners() {
    const btn = document.getElementById("btnFirstPara");
    btn.addEventListener('click',getFirstParaText)

    const inputDemo3 = document.getElementById("inputDemo3");
    inputDemo3.addEventListener('click',getFirstParaText)

}


function getFirstParaText() {

    console.log('getting first paragraph')
}


function clearEmailField() {

    console.log('clearing field');
    var inputObject = document.getElementById('inputDemo');
    inputObject.value = '';

}

function resetEmailField() {
    console.log('resetting field');
    var inputObject = document.getElementById('inputDemo');

    if ( inputObject.value === '') {
        inputObject.value = 'Enter your email for newsletter';
    }
}




function clearMessagePanel() {

    let messagePanel = document.getElementById("messagePanel");
    messagePanel.innerHTML = "";
}

function writeMessagePanel(content, append = true) {

    let messagePanel = document.getElementById("messagePanel");

    if (append) {
        messagePanel.innerHTML += content;
    }
    else {
        messagePanel.innerHTML = content;
    }

}




function showDate() {

    let currentDate = new Date();

    const longDate = currentDate.toString();
    const shortDate = currentDate.toDateString();

    console.log(`Long Date is ${longDate}`);
    console.log(`Short Date is ${shortDate}`);

    // Returns an object 
    let dateSpanObject = document.getElementById("currentDate");
    // DOM - document object model 
    console.log(dateSpanObject);

    dateSpanObject.innerHTML = shortDate;
    //  dateSpanObject.innerHTML='<strong>hello</strong>';
    // dateSpanObject.innerText='<strong>hello</strong>';

} // showDate()

function showGreeting() {

    let x = document.getElementById("greeting");
    x.innerHTML = "Working with the DOM";
    // DOM - document object model 
}

function WriteList(listOfItems) {

    htmlString = '<ul>';

    for (let i = 0; i < listOfItems.length; i++) {

        htmlString += `<li>${listOfItems[i]}</li>`;

    }

    htmlString += '</ul>';

    //  let messagePanel = document.getElementById("messagePanel");

    //  messagePanel.innerHTML += htmlString;

    // console.log(htmlString);
    return htmlString;
}

function WriteListMethod2(listOfItems) {

    htmlString = [];
    htmlString.push('<ul>');

    for (let i = 0; i < listOfItems.length; i++) {

        htmlString.push(`<li>${listOfItems[i]}</li>`);

    }

    htmlString.push('</ul>');
    console.log(htmlString.join(","));

    // let messagePanel = document.getElementById("messagePanel");
    // messagePanel.innerHTML += htmlString.join(" ");

    // console.log(htmlString);
    return htmlString.join(" ");

}

function WriteListMethod3(listOfItems) {

    htmlString = [];
    htmlString.push('<ul>');

    let arr = listOfItems.map(currentItem => {
        return `<li>${currentItem}</li>`
    }
    );

    htmlString = htmlString.concat(arr);

    console.log(htmlString.join());

    return htmlString.join("");
}