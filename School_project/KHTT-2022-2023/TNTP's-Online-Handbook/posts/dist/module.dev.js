"use strict";

var _firebaseApp = require("https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js");

var _firebaseAnalytics = require("https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js");

var _firebaseAuth = require("https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js");

var _firebaseDatabase = require("https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js");

var _firebaseStorage = require("https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js");

//variable
var sidenav_user = document.getElementsByClassName("sidenav-user-info")[0];
var profile = document.getElementsByClassName("profile-box")[0];
var firebaseConfig = {
  apiKey: "AIzaSyDaLmLo0Z6BUd1wYpqTFgEks0liCL6kjlE",
  authDomain: "tntp-s-online-handb.firebaseapp.com",
  projectId: "tntp-s-online-handb",
  storageBucket: "tntp-s-online-handb.appspot.com",
  messagingSenderId: "699284847876",
  appId: "1:699284847876:web:5d340338d3b559f880a451",
  measurementId: "G-531EMCZKBV"
};
var uid_ = new URLSearchParams(window.location.search).get('id');
var app = (0, _firebaseApp.initializeApp)(firebaseConfig);
var analytics = (0, _firebaseAnalytics.getAnalytics)(app);
var database = (0, _firebaseDatabase.getDatabase)(app);
var auth = (0, _firebaseAuth.getAuth)(app);
var storage = (0, _firebaseStorage.getStorage)(app);
(0, _firebaseAuth.onAuthStateChanged)(auth, function (user) {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(uid);
    var starCountRef = (0, _firebaseDatabase.ref)(database, 'users/' + uid);

    if (uid_ == undefined) {
      window.location.replace("./index.html?id=".concat(uid));
    }

    (0, _firebaseDatabase.onValue)(starCountRef, function (snapshot) {
      var data = snapshot.val();
      print_user(data, uid);
      (0, _firebaseDatabase.onValue)((0, _firebaseDatabase.ref)(database, 'post/'), function (value) {
        var data = value.val();
        print_post(snapshot, data);
      }, {
        onlyOnce: true
      });
    }, {
      onlyOnce: true
    });
  } else {
    window.location.replace("../login and sign up/index.html"); // User is signed out
    // ...
  }
});

function print_user(data, uid) {
  console.log(data);
  var photo;
  var str = new String(data.avatar);
  console.log(str.split(",")[0]);

  if (data.avatar.includes(',')) {
    (0, _firebaseStorage.getDownloadURL)((0, _firebaseStorage.ref)(storage, 'avatar/' + str.split(",")[0])).then(function (url) {
      // `url` is the download URL for 'images/stars.jpg'
      // This can be downloaded directly:
      // const xhr = new XMLHttpRequest();
      // xhr.responseType = 'blob';
      // xhr.onload = (event) => {
      //   const blob = xhr.response;
      // };
      // xhr.open('GET', url);
      // xhr.send();
      photo = url;
      sidenav(photo);
    });
  } else if (data.avatar == "none" || data.avatar == null) {
    photo = '../user.png';
  } else {
    photo = data.avatar;
  }

  function sidenav(photo) {
    console.log(photo);
    document.getElementById('img').src = photo;
    document.getElementById('href').href += "?id=".concat(uid, "&&profile=true");
  }
} //sign-out


var sign_out_btn = document.getElementById("sign-out");
sign_out_btn.addEventListener("click", function () {
  (0, _firebaseAuth.signOut)(auth).then(function () {// Sign-out successful.
  })["catch"](function (error) {
    console.log(error); // An error happened.
  });
}); //post creator

var submit_btn = document.getElementById('submit');
submit_btn.addEventListener("click", function () {
  var title = document.getElementById("title").value;
  var desc = document.getElementById("desc").value;
  var file = document.getElementById("file").files[0];
  var p = document.getElementsByClassName("error-text"); // Create a reference to 'mountains.jpg'

  var storageRef = (0, _firebaseStorage.ref)(storage, 'images/' + file.name);
  var starCountRef = (0, _firebaseDatabase.ref)(database, 'users/');
  var check = false;

  if (title != null && desc != null) {
    if (title.length > 5 && title.length < 30) {
      check = true;
    } else {
      check = false;
      p[0].innerText = 'Title must has at least more than 5 and less than 30 characters';
    }

    if (file != null) {
      check = true;
    } else {
      check = false;
    }

    if (desc.length > 10 && desc.length < 100) {
      check = true;
    } else {
      check = false;
      p[2].innerText = 'Description must have at least more than 10 and less than 100 characters';
    }
  }

  if (file != null) {
    check = true;
  } else {
    check = false;
  }

  if (desc.length > 10 && desc.length < 300) {
    check = true;
  } else {
    check = false;
    p[2].innerText = 'Description must have at least more than 10 and less than 100 characters';
  }

  if (check == true) {
    (0, _firebaseStorage.uploadBytes)(storageRef, file).then(function (snapshot) {
      console.log(snapshot);
      console.log('Uploaded a blob or file!');
      (0, _firebaseDatabase.set)((0, _firebaseDatabase.ref)(database, 'pending-post/' + generateRandomKey(10)), {
        title: title,
        desc: desc,
        archive: 'none',
        author_uid: uid_,
        img: file.name
      }).then(function () {
        window.location.reload();
      });
    });

    if (check == true) {
      (0, _firebaseStorage.uploadBytes)(storageRef, file).then(function (snapshot) {
        (0, _firebaseDatabase.set)((0, _firebaseDatabase.ref)(database, 'pending-post/' + generateRandomKey(10)), {
          title: title,
          desc: desc,
          archive: 'none',
          author_uid: uid_,
          img: file.name
        }).then(function () {
          window.location.reload();
        });
      });
    }
  }
}); //print_post

var post_box = document.getElementsByClassName("post-box")[0];

function print_post(value, data_2) {
  var data_keys = Object.keys(data_2);

  function processLoop() {
    var i, data, len, count, val, url, photo, str, url_2;
    return regeneratorRuntime.async(function processLoop$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = 0;

          case 1:
            if (!(i < data_keys.length)) {
              _context.next = 31;
              break;
            }

            data = data_2[data_keys[i]];
            len = data_keys.length;
            count = i + 1;
            _context.next = 7;
            return regeneratorRuntime.awrap(get_user(data));

          case 7:
            val = _context.sent;
            console.log(val);
            _context.prev = 9;
            _context.next = 12;
            return regeneratorRuntime.awrap((0, _firebaseStorage.getDownloadURL)((0, _firebaseStorage.ref)(storage, 'images/' + data.img)));

          case 12:
            url = _context.sent;
            photo = void 0;
            str = new String(val.avatar);

            if (!str.includes(',')) {
              _context.next = 22;
              break;
            }

            _context.next = 18;
            return regeneratorRuntime.awrap((0, _firebaseStorage.getDownloadURL)((0, _firebaseStorage.ref)(storage, 'avatar/' + str.split(",")[0])));

          case 18:
            url_2 = _context.sent;

            if (url_2 != null || url_2 == undefined) {
              print_post_element(data, val, url, url_2, data_keys[i], len, count);
            }

            _context.next = 24;
            break;

          case 22:
            if (val.avatar == "none" || val.avatar == null) {
              photo = '../user.png';
            } else {
              photo = val.avatar;
            }

            print_post_element(data, val, url, photo, data_keys[i], len, count);

          case 24:
            _context.next = 28;
            break;

          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](9);

          case 28:
            i += 1;
            _context.next = 1;
            break;

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[9, 26]]);
  }

  function get_user(data) {
    return new Promise(function (resolve, reject) {
      (0, _firebaseDatabase.onValue)((0, _firebaseDatabase.ref)(database, 'users/' + data.author_uid), function (user) {
        var user_val = user.val();
        resolve(user_val);
      }, {
        onlyOnce: true
      });
    });
  } // Usage


  processLoop();

  function print_post_element(data, val, url, url_2, keys, len, i) {
    var post_key = generateRandomKey(15);
    var html = "<div class=\"post-element ".concat(post_key, "\">\n    <div class=\"header\">\n        <div class=\"owner\" id='owner'>\n            <a href=\"../profile/index.html?id=").concat(data.author_uid, "&&profile=false\"><img id='img' src=\"").concat(url_2, "\" alt=\"avatar\"></a>\n            <h3>").concat(val.username, "</h3>\n        </div>\n        <div class=\"archive\">\n            <h3>Th\xE0nh t\u1EF1u</h3>\n            <h2>").concat(data.archive, "</h2>\n        </div>\n    </div>\n    \n    <div class=\"info\">\n        <h1>").concat(data.title, "</h1>\n        <p>").concat(data.desc, "</p>\n        <img src=\"").concat(url, "\" alt=\"\">\n    </div>\n    <div class=\"comment-section\">\n                    <div class=\"comment-form\">\n                        <input type=\"text\" placeholder=\"B\xECnh lu\u1EADn\" class=\"comment\">\n                        <button id=\"comment-btn\" class='comment-btn' post_id= ").concat(keys, "><i class=\"fa-solid fa-arrow-right\"></i></button>\n                    </div>\n                    <div class=\"comment-box\">\n                        \n                    </div>\n                </div>\n  </div>");
    post_box.insertAdjacentHTML("beforeend", html);
    var comment_box = document.getElementsByClassName(post_key)[0].getElementsByClassName('comment-box')[0];
    (0, _firebaseDatabase.onValue)((0, _firebaseDatabase.ref)(database, 'post/' + keys + '/comments/'), function (value) {
      var com = value.val();
      console.log(com);

      if (com != null) {
        var com_keys = Object.keys(com);

        var _loop = function _loop(_i) {
          var current = com[com_keys[_i]];
          (0, _firebaseDatabase.onValue)((0, _firebaseDatabase.ref)(database, 'users/' + current.author_uid), function (user_val) {
            var user_value = user_val.val();
            var str = new String(user_value.avatar);

            if (str.includes(',')) {
              (0, _firebaseStorage.getDownloadURL)((0, _firebaseStorage.ref)(storage, 'avatar/' + str.split(',')[0])).then(function (url) {
                print_comment(user_value, url, current);
              });
            } else {
              var photo;

              if (user_val.avatar == 'none' || user_val.avatar == null) {
                photo = '../user.png';
              } else {
                photo = user_val.avatar;
              }

              print_comment(user_value, photo, current);
            }

            function print_comment(user_val, photo, comment) {
              var html = "\n              <div class=\"comment-card\">\n                            <div class=\"comment-info\">\n                                <a href=\"../profile/index.html?id=".concat(user_val.author_uid, "&&profile=false\"><img src=\"").concat(photo, "\" alt=\"\" srcset=\"\"></a>\n                                <h3>").concat(user_val.username, "</h3>\n                            </div>\n                            <p>").concat(comment.comment, "</p>\n                        </div>\n                ");
              comment_box.insertAdjacentHTML('beforeend', html);
            }
          });
        };

        for (var _i = 0; _i < com_keys.length; _i++) {
          _loop(_i);
        }
      }
    });

    if (i == len) {
      start_create(uid_, len);
    }
  }
}

function generateRandomKey(length) {
  var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var key = '';

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    key += characters.charAt(randomIndex);
  }

  return key;
}

function start_create(uid, len) {
  var comment_btns = document.querySelectorAll('.comment-btn');
  comment_btns.forEach(function (element) {
    element.addEventListener('click', function () {
      if (comment_btns.length == len) {
        var post_id = element.getAttribute('post_id');
        var comment_value = element.parentElement.getElementsByClassName('comment')[0].value;
        (0, _firebaseDatabase.set)((0, _firebaseDatabase.ref)(database, 'post/' + post_id + '/comments/' + generateRandomKey(15)), {
          comment: comment_value,
          author_uid: uid
        }).then(function () {
          alert('upload completed');
          window.location.reload();
        });
      }
    });
  });
}