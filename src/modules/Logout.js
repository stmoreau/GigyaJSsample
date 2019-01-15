export default class Logout {
    constructor() {
        if(document.getElementById('logout')){
            document.getElementById('logout').addEventListener("click", Logout.handleLogout);
        }
        
    }

    // Handles the logout functionality
    static handleLogout() {
        gigya.socialize.logout();
        window.location = 'a.html';
    }
}
