class ShowUserInfo {
    constructor() {
        this.urlParamsArr = {};

        this.findUrlParams();
        this.renderUserInformation();
    }

    findUrlParams() {
        var urlParams = document.location.search.substr(1).split("&");

        for (var i = 0; i < urlParams.length; i++) {
            var ret = urlParams[i].toString().split("=");
            this.urlParamsArr[ret[0]] = decodeURIComponent(ret[1]);
        }
    }

    renderUserInformation() {
        // Inject the user's nickname
        if (this.urlParamsArr['nickname'] !== '') {
            this.showElementAndInsertHtml('nickname');
        }

        // Inject the login provider
        if (this.urlParamsArr['loginProvider'] !== '') {
            this.showElementAndInsertHtml('loginProvider');
        }

        // Inject personalised greeting
        document.getElementById('newUser').innerHTML = this.urlParamsArr["newUser"] === 'true' ? '' : ' back';

        // Inject the user's thumbnail
        if (this.urlParamsArr['thumbnailURL'].length > 0) {
            document.getElementById("photo").src = this.urlParamsArr['thumbnailURL'];
        } else {
            document.getElementById("photo").src = "http://cdn.gigya.com/site/images/bsAPI/Placeholder.gif";
            document.getElementById("profile").style.display = "block";
        }

        // Inject the user's birthDay
        if (this.urlParamsArr['birthDay'] !== '' && this.urlParamsArr['birthMonth'] !== '' && this.urlParamsArr['birthYear'] !== '') {
            this.showElementAndInsertHtml('birthDay');
            this.showElementAndInsertHtml('birthMonth');
            this.showElementAndInsertHtml('birthYear');
        }

        // Inject the user's gender
        if (this.urlParamsArr['gender'] !== '') {
            this.showElementAndInsertHtml('gender');
        }

        // Inject the user's email
        if (this.urlParamsArr['email'] !== '') {
            this.showElementAndInsertHtml('email');
        }

        // Inject the user's proxiedEmail
        if (this.urlParamsArr['proxiedEmail'] !== '') {
            this.showElementAndInsertHtml('proxiedEmail');
        }

        // Inject the user's country
        if (this.urlParamsArr['country'] !== '') {
            this.showElementAndInsertHtml('country');
        }

        // Inject the user's state
        if (this.urlParamsArr['state'] !== '') {
            this.showElementAndInsertHtml('state');
        }

        // Inject the user's city
        if (this.urlParamsArr['city'] !== '') {
            this.showElementAndInsertHtml('city');
        }

        // Inject the user's zip
        if (this.urlParamsArr['zip'] !== '') {
            this.showElementAndInsertHtml('zip');
        }

        // Inject the user's firstName
        if (this.urlParamsArr['firstName'] !== '') {
            this.showElementAndInsertHtml('firstName');
        }

        // Inject the user's lastName
        if (this.urlParamsArr['lastName'] !== '') {
            this.showElementAndInsertHtml('lastName');
        }

        // Inject the user's age
        if (this.urlParamsArr['age'] !== '') {
            this.showElementAndInsertHtml('age');
        }
    }

    showElementAndInsertHtml(value) {
        document.getElementById(value).parentNode.removeAttribute('hidden');
        document.getElementById(value).innerHTML = this.urlParamsArr[value];
    }

}

new ShowUserInfo();