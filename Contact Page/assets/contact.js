// Initialize Firebase
var config = {
    apiKey: "AIzaSyBcLQGnqKTSb586Uu45VR6yn5KalYajHA0",
    authDomain: "contactformproject-7d34a.firebaseapp.com",
    databaseURL: "https://contactformproject-7d34a.firebaseio.com",
    projectId: "contactformproject-7d34a",
    storageBucket: "contactformproject-7d34a.appspot.com",
    messagingSenderId: "257825301631"
  };
  firebase.initializeApp(config);

// Reference messages collection 
var messagesRef = firebase.database().ref('messages');


// Event Listener form submit button 
document.getElementById('contactForm').addEventListener('submit' , submitForm);
//Submit form 
function submitForm(e) {
    e.preventDefault();

    //console.log(123);
    //Get Values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    
    // save msg
    saveMessage(name, company, email, phone, message);
    // show submitted alert

    // clear fields after submission
    document.getElementById('contactForm').reset();
}


// function to get form values 
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save msg firebase 

function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}