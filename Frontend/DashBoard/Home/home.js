accessToken = localStorage.getItem('access');
if (!accessToken) {
    window.location.href = '/Login/log.html';
}
let container = document.getElementById('container');
function logOut() {
    localStorage.clear ();
    window.location.href ='/Login/log.html';
}