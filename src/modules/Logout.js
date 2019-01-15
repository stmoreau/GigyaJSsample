export default class Logout {
    constructor() {
        const logoutEl = document.getElementById('logout');
        /* istanbul ignore else */
        if(logoutEl){
            logoutEl.addEventListener("click", Logout.handleLogout);
        }
    }

    // Handles the logout functionality
    static handleLogout() {
        gigya.socialize.logout();
        window.location = 'a';
    }
}
