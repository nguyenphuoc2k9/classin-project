import{ initializeApp }  from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth,onAuthStateChanged,signOut   } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase,set,ref,onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getFirestore,setDoc,doc,collection } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
//variable
const sidenav_user = document.getElementsByClassName("sidenav-user-info")[0];
const firebaseConfig = {
  apiKey: "AIzaSyDaLmLo0Z6BUd1wYpqTFgEks0liCL6kjlE",
  authDomain: "tntp-s-online-handb.firebaseapp.com",
  projectId: "tntp-s-online-handb",
  storageBucket: "tntp-s-online-handb.appspot.com",
  messagingSenderId: "699284847876",
  appId: "1:699284847876:web:5d340338d3b559f880a451",
  measurementId: "G-531EMCZKBV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app)
const db = getFirestore(app)
const auth = getAuth()

onAuthStateChanged(auth, (user) => {
    if (user) {
      
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      alert("signed in")
      alert(`welcome ${user.displayName}`)
      const uid = user.uid;
      console.log(uid);
      // ...
      const starCountRef = ref(database, 'users/' +uid);
      onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      print_user(data,uid)
}); 
    } else {
      window.location.replace("../login and sign up/index.html")
      // User is signed out
      // ...
    }
  });
function print_user(data,uid){
  console.log(data);
  let photo;
  if (data.avatar == "none" || data.avatar == null){
    photo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAYFBMVEX///8AAADc3NxSUlLm5ub39/ehoaETExPu7u5zc3Pr6+tVVVWIiIhvb2/IyMjDw8N7e3vOzs6bm5uysrI4ODgpKSkuLi5eXl6oqKggICDU1NRkZGSUlJQbGxtAQEBGRkbDhC7uAAAFM0lEQVRoge1b29qqIBBV1DyWlJWlqe//lvuvLAVhZgDdV63LvnQJzKw5AJ73ww8/6BEl4WFX7Os8+ENe74vdIUyi/8HMbkUQ+wvEQXFjmxKH5V7BO/uCfRluRF2mF4j5jUtars/MTuCYhfGf1p1/Bk/3cvrXow9TE+Y30nUWP+Pm1E/wzJ27utpx+/61cqQOc1vqJ2qnua+M7GyJ2GHwFoYmg1tSs7M7t++frbzu2K3B7fv3ozl3tQ71E8YLvyMMqR/yoL8T2Hdm3DfsfXXVsCyJkow1VY36xG3FcbfyRJb79cYOr3eusiBWw+zkdT9avQYRJKLNM8jHAMWMQCm+0/wd0pY9lCdGYPw7U7ghTU2RZwuInaC0kLGB40a/HDe6EDCbGM/NowEgj7EICxhNTDGZDBp6DT8LTXpB4Pa8E8QOTnwG5EwXWkEU9QD5FcrrIF+h6jMoj4DFh9Bz1EowAjNOvc1BjkLPh8BV1yoFg56i5yMN9Bpf5zJQXLwaZMFg/qUZOoPC0p7O7bUQuUYtwLWiOTnhRf5J+QwYj00SoQNIHqseKcFHTEp+2OKUr4LLk8N65AqTC+Geh0nmj5ArHAee9TWnXTGLSPJrUnXACajKbZHE38TVsIpjYe+gtPpmpS7aR5F1Bvva3qDDgrbrZNEA884nGjI3GJhfkNYwCrAHHmRytMj0AzE3SNBC807lxsfhx4nhVJE9HfPyJ0SZgWPBCwGRHClXXxBlhtCIIOoMopRviOU6aux/uCYaPgGUNolk7lhn4YWcwE1r3YkCS1koSnMDd7MXWuEhYosVY6f2z8Q5xH2Twk7u3YmeQyUHhe5BfYktuX/WJfDMoDtuTj68C//uoaraot07lnUl5VUiOeGrCy8Z2w7xTh59shurwz70IoJmiAaHutqrbT+9N7ixbJyAjE39z/T1G+5voquhIjOq8azT19ecF5y3s2bAR4BRiRVFBpmq+JtKRPpaiE+2gKWQorwigWUeTsNCVf1fuGAHyNhFuYBDqhTPkkquQ/NKNkFYb8SQCiYTqrT5eOJtMPRD0PKHspoBU1jxU6E0KtB1Y6Ik0+/ZQ9mUlEZBf7XcmQMqAXk4enM33CCZoPcLeR21wnC1PgwRaYsHuWjQTpLDQQCtvy3aMhqL01obATpDWjZGNALrtA2tcfZliayZIxduz1O/c9kcULdFbDeBRyiVRtVPVCa9FpuwcygDjKoHqZr3nlQn6JGomu9K/1HYO7abhEJhxsomoEqRXI9cqLRL3f5UNH6dD7sso2Wn6Xkv58j5nFlEXsmFxA7u5AuL0+6Pyd7W6v5Ih5zz6IVDXiGTzp8GsswAViT9ld6B0kKq3yDFlDb1rPOICaL/gpt6UhxagVzMyRHdqLckx/oqwhb2yuQdqlnVduQEseZbkZNyg/M25KQDGx67b0FOPKoy5R9rkpNzoo/Rpe6B5RMuDDKDz/e2juxRazOHnwyEdEJEi2+MNsyIPmPvHDKpW2cz7ie+YtNantzNWstxP3H8eNzFavC3TxFyp+9LzTAdPW2NV775Bqje1mompTWjZ1Py5FBvTT2/jn5mnO2/JzZcjhv/RdhZfF8cu1Simj3hdtDaE4+YX9IGLN6SZn7t4exc78iH63teafizigtJOncsMkcsrhXkj/LQhOPLk7A5lA+5Z56ucK5/BEsXdVx37Ycgz4Ohvy5OBHV85fsc9Ksk3W6DqzxlSrjecOEbXKJ5ITxg14cOW10fekN3cSrf+uLUiPHKWDtdGTsC7ecffvjhD/8A/WI7P3c/SxkAAAAASUVORK5CYII='
    
  }else{
    photo = data.avatar
  }
  var html = `<a href="../profile/index.html?id=${uid}"><img src="${photo}" alt=""></a>
  <h2>${data.username}</h2>`

  sidenav_user.insertAdjacentHTML("afterbegin",html)
}
//sign-out
const sign_out_btn = document.getElementById("sign-out")
sign_out_btn.addEventListener("click",()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    console.log(error);
    // An error happened.
  });
})