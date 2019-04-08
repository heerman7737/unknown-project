var config = {
    apiKey: "AIzaSyAqbie_UXrsJW-HagZ-rady78zPJ7sa2wU",
    authDomain: "unknown-group.firebaseapp.com",
    databaseURL: "https://unknown-group.firebaseio.com",
    projectId: "unknown-group",
    storageBucket: "unknown-group.appspot.com",
    messagingSenderId: "409764021768"};

    firebase.initializeApp(config);



    //-----------------------------------------------------------------------------------------------------------------------------------------------
    let auth=firebase.auth();
// Sign up
document.querySelector('#signup-button').addEventListener("click",(e)=>{
    e.preventDefault();
    //get user info
    console.log("work")
    const email= document.getElementById("signup-email").value;
    const password=document.getElementById("signup-password").value;

    auth.createUserWithEmailAndPassword(email,password).then(cre=>{
        console.log(cre)
        $('#signup-modal').modal('hide');
        document.querySelector('#signup-form').reset();
        window.location = './UI/UI.HTML'
    })
})
//Login
document.querySelector('#login-button').addEventListener("click",(e)=>{
    e.preventDefault();
    //get user info
    console.log("work")
    const email= document.getElementById("login-email").value;
    const password=document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email,password).then(cre=>{
        console.log(cre)
        $('#login-modal').modal('hide');
        document.querySelector('#login-form').reset();
        window.location = './UI/UI.HTML'
    })
})

// Listen
auth.onAuthStateChanged(user=>{
    if(user){
        console.log("user logged in")
    }
    else{
        console.log("user logged out")
    }
    
        if(user){
            document.querySelectorAll(".logged-in").forEach(items=>
                items.setAttribute("style","display:block width:10px")
                
            
            )
            document.querySelectorAll(".logged-out").forEach(items=>
                items.setAttribute("style","display:none")
               
            
            )
        }
        else{
            document.querySelectorAll(".logged-in").forEach(items=>
                items.setAttribute("style","display:none")
               
            )
            document.querySelectorAll(".logged-out").forEach(items=>
                items.setAttribute("style","display:block  width:10px")
                
            )
        }
    }
)
