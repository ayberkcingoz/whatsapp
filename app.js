function init() {

    const firebaseConfig = {
        apiKey: "AIzaSyCl7iWeB6XPVBpnNzGtVsl17wA19WEx5ZA",
        authDomain: "sohbetuyg-1dc24.firebaseapp.com",
        projectId: "sohbetuyg-1dc24",
        storageBucket: "sohbetuyg-1dc24.appspot.com",
        messagingSenderId: "237172160186",
        appId: "1:237172160186:web:8828f5951c8775441db483"
    };
    firebase.initializeApp(firebaseConfig);

    firebase.database().ref("messages").push().set({
        sender: "tcf",
        message: "deneme",
        time: firebase.database.ServerValue.TIMESTAMP
    });
}

function sohbeteBasla() {
    myName = nameInput.value;
    if (myName.length > 0) {
        console.log(myName);
        login.classList.add("hidden");
        init();
    }
}

function mesajGonder() {
    var msg = document.getElementById("myInput").value;
    if (msg.length > 0) {
        var html = '';
        html += '<li class="message mine">';
        html += '<p class="text">' + msg + '</p>';
        html += '<span class="date">12:00</span>';
        html += '</li>';
        messages.innerHTML += html;
        messages.scroll({ behavior: "smooth", top: 999999999999999999999 });
    }
    document.getElementById("myInput").value = "";
}

var login = document.querySelector(".login");
var nameInput = document.getElementById("myName");
var messages = document.querySelector(".messages");
var myName = "";