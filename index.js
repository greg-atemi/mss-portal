function registration() {
    var apps = document.getElementById('apps');
    var login = document.getElementById('login');
    var register = document.getElementById('register');
    var parent = document.getElementById('parent');
    var body = document.getElementById('body');

    apps.style.display = "none";
    login.style.display = "none";
    register.style.display = "block";
    parent.style.justifyContent = "center"
    body.style.backgroundImage = "url('assets/background2.png')";
}

function login() {
    var apps = document.getElementById('apps');
    var login = document.getElementById('login');
    var register = document.getElementById('register');
    var parent = document.getElementById('parent');
    
    apps.style.display = "block";
    login.style.display = "block";
    register.style.display = "none";
    parent.style.justifyContent = "space-between"
    body.style.backgroundImage = "url('assets/background.png')";
}
