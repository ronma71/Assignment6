//general info - checking form validation numbers and letters
/*function validateName(x){
  alert(document.getElementById(x).value);
} */
/*function validate() {
    if(document.form-contact.name.value == "[a-zA-Z ]+" ) {
        alert("Please provide your name with letters only!");
        document.form-contact.name.focus() ;
        return false;
    }
         
    if(document.form-contact.address.value == "/^[0-9a-zA-Z]+$/" ) {
        alert("Please provide your address!");
        document.form-contact.address.focus() ;
        return false;
    }
       
    if(document.genform-contactInfo.phone.value == "^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$") {
        alert("Please provide your phone number in this format: ###-###-####");
        document.form-contact.address.focus() ;
        return false;
    }
    
    return(true);
    }
}

function validateEmail() {
    var emailID = document.form-contact.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
         
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID")
        document.form-contact.email.focus() ;
        return false;
    }
    return(true);
}*/

function validateName(x) {
    //validation rule
    var regEx = /[A-Za-z -']$/;
    //check input
    if(regEx.test(document.getElementById(x).value)) {
    //style green
    document.getElementById(x).style.background ='#ccffcc';
    //hide error prompt
    document.getElementById(x + 'Error').style.display = "none";
    return true;
    } else {
    //style red
    document.getElementById(x).style.background ='#e35152';
    //show error prompt
    document.getElementById(x + 'Error').style.display = "block";
    return false; 
    }
}
//validate email
function validateEmail(email) { 
  var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(regEx.test(email)) {
    document.getElementById('email').style.background ='#ccffcc';
    document.getElementById('emailError').style.display = "none";
    return true;
  } else {
    document.getElementById('email').style.background ='#e35152';
    return false;
  }
}
//validate select boxes
function validateSelect(x){
  if(document.getElementById(x).selectedIndex !== 0) {
    document.getElementById(x).style.background ='#ccffcc';
    document.getElementById(x + 'Error').style.display = "none";
    return true;
    } else {
    document.getElementById(x).style.background ='#e35152';
    return false; 
  }
}
function validateRadio(x) {
  if(document.getElementById(x).checked) {
    return true;
  } else {
    return false;
  }
}
function validateCheckbox(x) {
  if(document.getElementById(x).checked) {
    return true;
  }
  return false;
}   
function validateForm() {
  //set error catcher
  var error = 0;
  //check name
  if(!validateName('name')) {
    document.getElementById('nameError').style.display = "block";
    error++;
  }
  //validate email
  if(!validateEmail(document.getElementById('email').value)){
    document.getElementById('emailError').style.display = "block";
    error++;
  }
  //validate animal dropdown box
  if(!validateSelect('animal')) {
    document.getElementById('animalError').style.display = "block";
    error++;
  }
  //validate Radio
  if(validateRadio('left')) {

  } else if(validateRadio('right')) {

  } else {
    document.getElementById('handError').style.display = "block";
    error++;
  }
  if(!validateCheckbox('accept')) {
    document.getElementById('termsError').style.display = "block";
    error++;
  }
  // Don't submit form if there are errors
  if(error > 0) {
    return false;
  }
}  