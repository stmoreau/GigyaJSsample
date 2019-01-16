export default class Logout {
    constructor() {
        const logoutEl = document.getElementById('logout');
        if (logoutEl) {
            logoutEl.addEventListener('click', Logout.gigyaLogout);
        }
    }

    // Logout the user using gigya
    static gigyaLogout() {
        gigya.socialize.logout({ callback: Logout.handleGigyaLogoutCallback });
    }

    // Redirect to login screen when request is successful
    static handleGigyaLogoutCallback(res) {   
        if ( res.errorCode == 0 ) {                
            window.location = 'login';
        } else { 
            console.error('Logout error :' + res.errorMessage); 
        } 
    }
}