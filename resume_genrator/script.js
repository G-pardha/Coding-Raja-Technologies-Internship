
function addNewWEField() {
    // Create a new textarea element
    var newTextArea = document.createElement("textarea");
    newTextArea.placeholder = "Previous company you worked";
     newTextArea.className = "form-control weField mt-2";

    // Append the new textarea to the container
    var container = document.getElementById("weAddButton").parentNode;
    container.insertBefore(newTextArea, document.getElementById("weAddButton"));

    // Add a line break for separation
    var lineBreak = document.createElement("br");
    container.insertBefore(lineBreak, document.getElementById("weAddButton"));

    console.log("Added a new work experience field");
}

function addNewAQField() {
    // Create a new textarea element
    var newTextArea = document.createElement("textarea");
    newTextArea.placeholder = "Enter your academic qualification";
    newTextArea.className = "form-control aqField";

    // Append the new textarea to the container
    var container = document.getElementById("aqAddButton").parentNode;
    container.insertBefore(newTextArea, document.getElementById("aqAddButton"));

    // Add a line break for separation
    var lineBreak = document.createElement("br");
    container.insertBefore(lineBreak, document.getElementById("aqAddButton"));

    console.log("Added a new academic qualifications field");
}
function generatecv() {
    // Get the values of the surname, first name, and second name fields
    let surname = document.getElementById("surnamefield").value;
    let firstname = document.getElementById("firstnamefield").value;
    let secondname = document.getElementById("secondnamefield").value;

    // Combine the values to form the full name using template literals
    let fullName = `${surname} ${firstname} ${secondname}`;
    
    // Update the content of the element with id "nameT"
    let nameT = document.getElementById("nameT");
    nameT.innerHTML = fullName;

    // Update the heading name
    document.getElementById('nameT2').innerHTML = fullName;

    // Update the contact, address, and social media links
    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressfield").value;
    document.getElementById("fbT").innerHTML = document.getElementById("metafield").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instafield").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedinfield").value;

    // Update the bio section
    document.getElementById("bioT").innerHTML = document.getElementById("biofield").value;

     // Update the work experience section
     let weFields = document.getElementsByClassName("weField");
     let weList = document.getElementById("weT");
     let weStr = "";
     for (let we of weFields) {
         weStr += `<li>${we.value}</li>`;
     }
     weList.innerHTML = weStr;
 
     // Update the academic qualifications section
     let aqFields = document.getElementsByClassName("aqField");
     let aqStr = "";
     for (let aq of aqFields) {
         aqStr += `<li>${aq.value}</li>`;
     }
     document.getElementById("aqT").innerHTML = aqStr;

     document.getElementById("cv-form").style.display="none"
     document.getElementById("cv-template").style.display="block";

 }

 //print cv
 function printcv(){
    window.print();
 }