var config = {
    apiKey: "AIzaSyAqbie_UXrsJW-HagZ-rady78zPJ7sa2wU",
    authDomain: "unknown-group.firebaseapp.com",
    databaseURL: "https://unknown-group.firebaseio.com",
    projectId: "unknown-group",
    storageBucket: "unknown-group.appspot.com",
    messagingSenderId: "409764021768"};

    firebase.initializeApp(config);



    //-----------------------------------------------------------------------------------------------------------------------------------------------
    let db=firebase.firestore();
    let auth=firebase.auth();
  
    let title,category
    document.getElementById("submit").addEventListener("click",e=>{
    e.preventDefault();
    let title=document.getElementById("title").value.trim();
    console.log(title);
    let category=document.getElementById("category").value.trim();
    console.log(category)
    db.collection("Post").doc(document.getElementById("title").value).set({
        title: title,
        category:category,

     })
     document.getElementById("title").value=""
     document.getElementById("category").value=""

  })
  let number=1
  db.collection('Post').onSnapshot(({docs})=>{
    docs.forEach(doc=>{
        console.log(doc.data())
        let {title,category}=doc.data()
        let currentPost=document.createElement("tr")
        number++
        currentPost.innerHTML=`
        <tr>
            <td>${number}</td>
            <td>${title}</td>
            <td>${category}</td>
            </tr>`
        document.getElementById("displayblog").append(currentPost)


    })
})
document.querySelector("#logout").addEventListener("click",(e)=>{
  e.preventDefault()
  auth.signOut().then(()=>{
      console.log("work")
      window.location = '../index.HTML'
  })
})