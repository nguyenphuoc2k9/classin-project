import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,deleteUser } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, remove,set, ref,onValue,update } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getFirestore, setDoc, doc, collection } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const auth = getAuth()
const uid = new URLSearchParams(window.location.search).get('uid')

document.getElementById('submit-btn').onclick = (e)=>{
  e.preventDefault()
    var gender = document.getElementById('gender').value
    var grade = document.getElementById('grade').value
    var live_location = document.getElementById('live-locate').value
    var school = document.getElementById('school').value
    var birthday = document.getElementById("birthday").value
    var relatives = document.getElementById('relatives').value
    var home_town = document.getElementById('home-town').value
    var race = document.getElementById('race').value
    var religion = document.getElementById('religion').value
    var political = document.getElementById('polititcal').value
    var havegone = document.getElementById('havegone').value
    var language = document.getElementById('language').value

    var now_date = new Date()
    var date_str = `${now_date.getDate()}/${now_date.getMonth()+1}/${now_date.getFullYear()}`
    if(havegone =='' || havegone == null){
      havegone == 'chưa '
    }
    if(political ==''&& language =='' &&live_location== '' && grade == ''&& school == ''&& birthday == ''&& relatives == ''&& religion == ''&& home_town == ''&& race == ''){
        alert('Không được bỏ trống các ô')
    }else{
        update(ref(database,`users/${uid}/`),{
            grade:grade,
            gender:gender,
            relatives:relatives,
            race:race,
            religion:religion,
            home_town:home_town,
            birthday:birthday,
            live_location:live_location,
            health_condition:'unset',
            school:school,
            join_time: date_str,
            political:political,
            havegone :havegone,
            language:language
        }).then(()=>{
            window.location.replace('/main/home/')
        })
    }
}
var check_count = 0
checkif()
function checkif() {
  console.log('yes');
  if(check_count > 0 && (uid==''||uid==null)){
    check_count+=1
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const starCountRef = ref(database, 'users/' +user.uid);
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if(snapshot.exists()){
          console.log(data.username);
          window.location.replace("/main/home/")
        }
        },{
          onlyOnce:true,
        })
      } else {
        // User is signed .
        // ...
      }
    });
  }
}


