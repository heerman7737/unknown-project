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
    auth.onAuthStateChanged(user=>{
      if(user){
        document.getElementById("submit").addEventListener("click",e=>{
          e.preventDefault();
          let title=document.getElementById("title").value.trim();
          console.log(title);
          let category=document.getElementById("category").value.trim();
          console.log(category)
          let date=document.getElementById("date").value.trim();
          console.log(date)
          let body=document.getElementById("body").value.trim();
          console.log(body)
          db.collection("Post").doc(document.getElementById("title").value).set({
              title: title,
              category:category,
              date:date,
              body:body,
              uid:user.uid
           })
           document.getElementById("title").value=""
           document.getElementById("category").value=""
           document.getElementById("date").value=""
           document.getElementById("body").value=""
        })
        let number=0
        db.collection('Post').where("uid","==",user.uid).onSnapshot(({docs})=>{
          docs.forEach(doc=>{
              console.log(doc.data())
              let {title,category,date,body}=doc.data()
              let currentPost=document.createElement("tr")
              number++
              currentPost.innerHTML=`
              <tr>
                  <td>${number}</td>
                  <td>${title}</td>
                  <td>${category}</td>
                  <td>${date}</td>
                  <td>
                  <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#detail-modal">
                          <i class="fas fa-angle-double-right"></i>Details
                      </a>
                  </td>
                  </tr>`
              document.getElementById("displayblog").append(currentPost)
            let detailPost=document.createElement("h6")
            detailPost.innerHTML=`<h6>${body}</h6>`
            document.getElementById("detail").append(detailPost)
      
          })
      })
      
    }})

document.querySelector("#logout").addEventListener("click",(e)=>{
  e.preventDefault()
  auth.signOut().then(()=>{
      console.log("work")
      window.location = '../index.HTML'
  })
})