class GigyaSocialLogin {
    constructor() {
        this.fetchedUserData = {};
        this.showLoginUI();
    }

    showLoginUI() {
        const self = this;
        gigya.socialize.showLoginUI({
            containerID: "loginDiv",
            cid: '',
            width: 220,
            height: 60,
            showTermsLink: false,
            onLogin: data => self.handSocialleLogin(data)
        });
    }

    handSocialleLogin(data) {
        if (data.response.status === 'OK' && data.response.errorCode === 0) {
            this.fetchedUserData = data.user;
            this.handleEmailValueValidation(data.user);
        } else {
            console.error('Login request was unsuccessful with errorMessage: ', data.response.errorMessage)
            console.error('Login request was unsuccessful with errorCode: ', data.response.errorCode)
        }
    }

    handleEmailValueValidation(user) {
        const urlParams = GigyaSocialLogin.createUrlParams(user);
        if (user.email) {
            GigyaSocialLogin.increaseOrSetTimesLoggedInCookie();
            window.location = `b.html?${urlParams}`;
        } else {
            this.showEmailForm();
        }
    }

    showEmailForm() {
        const emailForm = document.getElementById('emailForm');
        const emailInput = document.getElementById('email');
        const self = this;

        emailForm.removeAttribute('hidden');
        emailInput.focus();

        emailForm.addEventListener("submit", evt => self.handleSubmitEmailForm(evt, self));
    }

    static increaseOrSetTimesLoggedInCookie() {
        var timesLoggedInCookie = GigyaSocialLogin.getCookie("timesLoggedIn");
        if (timesLoggedInCookie != "") {
            const newTimesLoggedInCookie = Number(timesLoggedInCookie) + 1;
            GigyaSocialLogin.setCookie("timesLoggedIn", newTimesLoggedInCookie, 365);
        } else {
            GigyaSocialLogin.setCookie("timesLoggedIn", 1, 365);
        }
    }

    static getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    static setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

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

    static validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    static createUrlParams(user) {
        let urlParams = "";
        for (var key in user) {
            if (urlParams != "") {
                urlParams += "&";
            }
            urlParams += key + "=" + encodeURIComponent(user[key]);
        };
        return urlParams;
    }
}

new GigyaSocialLogin();