class GigyaSocialLogin {
    constructor() {
        this.fetchedUserData = {};
        this.showLoginUI();
    }

    // Show the login UI
    showLoginUI() {
        const self = this;
        gigya.socialize.showLoginUI({
            containerID: "loginDiv",
            cid: '',
            width: 220,
            height: 60,
            showTermsLink: false,
            onLogin: data => self.handleSocialLogin(data)
        });
    }

    // Handles login data
    handleSocialLogin(data) {
        if (data.response.status === 'OK' && data.response.errorCode === 0) {
            this.fetchedUserData = data.user;
            this.handleEmailValueValidation(data.user);
        } else {
            console.error('Login request was unsuccessful with errorMessage: ', data.response.errorMessage)
            console.error('Login request was unsuccessful with errorCode: ', data.response.errorCode)
        }
    }

    // Handles email value validation
    handleEmailValueValidation(user) {
        GigyaSocialLogin.increaseOrSetTimesLoggedInCookie();
        if (user.email) {
            const params = {
                "profile": {
                    "email": user.email
                }
            }
            
            /*
            * This method is part of the Registration-as-a-Service and the Profile Management - IDS packages.
            * Both packages are premium platforms that require separate activation
            * A premium account would be able to see the new email on b.html for social media such as Instagram
            * which according to https://developers.gigya.com/display/GD/User+JS
            *  Gigya doesn't save by default the user's email in Gigya's User object
            */
            gigya.accounts.setAccountInfo(params);
            window.location = 'b.html';
        } else {
            this.showEmailForm();
        }
    }

    // Shows email form
    showEmailForm() {
        const emailForm = document.getElementById('emailForm');
        const emailInput = document.getElementById('email');
        const self = this;

        emailForm.removeAttribute('hidden');
        emailInput.focus();

        emailForm.addEventListener("submit", evt => self.handleSubmitEmailForm(evt, self));
    }

    // Handles submit of email form
    handleSubmitEmailForm(evt, self) {
        evt.preventDefault();

        const emailValue = document.getElementById('email').value;
        const validEmailValue = GigyaSocialLogin.validateEmail(emailValue);

        if (validEmailValue) {
            self.fetchedUserData.email = emailValue;
            self.handleEmailValueValidation(self.fetchedUserData);
        } else {
            const emailError = document.getElementById('emailError');
            const emailInput = document.getElementById('email');

            emailError.removeAttribute('hidden');
            emailInput.focus();
        }
    }

    // Handles cookie that counts number of times user has logged in using GigyaSocialLogin
    static increaseOrSetTimesLoggedInCookie() {
        const timesLoggedInCookie = GigyaSocialLogin.getCookie("timesLoggedIn");
        if (timesLoggedInCookie != "") {
            const newTimesLoggedInCookie = Number(timesLoggedInCookie) + 1;
            GigyaSocialLogin.setCookie("timesLoggedIn", newTimesLoggedInCookie, 365);
        } else {
            GigyaSocialLogin.setCookie("timesLoggedIn", 1, 365);
        }
    }

    // Gets cookie value
    static getCookie(cname) {
        const name = cname + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // Set cookie
    static setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    // Email validation
    static validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

new GigyaSocialLogin();