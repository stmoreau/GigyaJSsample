class ShowUserInfo {
    constructor() {
        this.onLoad();
        this.showAddConnectionsUI();
        this.attachLogoutHandler();
    }

    attachLogoutHandler(){
        document.getElementById('logout').addEventListener("click", this.handleLogout);
    }

    handleLogout() {
        gigya.socialize.logout();
        window.location='a.html';
    }
    
    onLoad() {
        // get user info
        gigya.socialize.getUserInfo({ callback: this.renderUserInformation });
        // register for connect status changes
        gigya.socialize.addEventHandlers({ onConnectionAdded: this.renderUserInformation, onConnectionRemoved: this.renderUserInformation });
    }

    showAddConnectionsUI() {
        gigya.socialize.showAddConnectionsUI({
            height:65,
            width:175,
            showTermsLink:false,
            containerID: "divConnect"
        });
    }

    renderUserInformation(res) {
        // Inject the user's nickname
        if (res.user['nickname'] !== '') {
            ShowUserInfo.showElementAndInsertHtml('nickname', res.user['nickname']);
        }

        // Inject the login provider
        if (res.user['loginProvider'] !== '') {
            ShowUserInfo.showElementAndInsertHtml('loginProvider', res.user['loginProvider']);
        }

        // Inject personalised greeting
        document.getElementById('newUser').innerHTML = res.user["newUser"] === 'true' ? '' : ' back';

        // Inject the user's thumbnail
        if (res.user['thumbnailURL'].length > 0) {
            document.getElementById("photo").src = res.user['thumbnailURL'];
        } else {
            document.getElementById("photo").src = "http://cdn.gigya.com/site/images/bsAPI/Placeholder.gif";
            document.getElementById("profile").style.display = "block";
        }

        // Inject the user's birthDay
        if (res.user['birthDay'] !== '' && res.user['birthMonth'] !== '' && res.user['birthYear'] !== '') {
            ShowUserInfo.showElementAndInsertHtml('birthDay', res.user['birthDay']);
            ShowUserInfo.showElementAndInsertHtml('birthMonth', res.user['birthMonth']);
            ShowUserInfo.showElementAndInsertHtml('birthYear', res.user['birthYear']);
        }

        // Inject the user's gender
        if (res.user['gender'] !== '') {
            ShowUserInfo.showElementAndInsertHtml('gender', res.user['gender']);
        }

        // Inject the user's email
        if (res.user['email'] !== '') {
            ShowUserInfo.showElementAndInsertHtml('email', res.user['email']);
        }

        // Inject the user's proxiedEmail
        if (res.user['proxiedEmail'] !== '') {
            ShowUserInfo.showElementAndInsertHtml('proxiedEmail', res.user['proxiedEmail']);
        }

        // Inject the user's country
        if (res.user['country'] !== '') {
            ShowUserInfo.showElementAndInsertHtml('country', res.user['country']);
        }

        // Inject the user's state
        if (res.user['state'] !== '') {
            ShowUserInfo.showElementAndInsertHtml('state', res.user['state']);
        }

        // Inject the user's city
        if (res.user['city'] !== '') {
            ShowUserInfo.showElementAndInsertHtml('city', res.user['city']);
        }

        // Inject the user's zip
        if (res.user['zip'] !== '') {
            ShowUserInfo.showElementAndInsertHtml('zip', res.user['zip']);
        }

        // Inject the user's firstName
        if (res.user['firstName'] !== '') {
            ShowUserInfo.showElementAndInsertHtml('firstName', res.user['firstName']);
        }

        // Inject the user's lastName
        if (res.user['lastName'] !== '') {
            ShowUserInfo.showElementAndInsertHtml('lastName', res.user['lastName']);
        }

        // Inject the user's age
        if (res.user['age'] !== '') {
            ShowUserInfo.showElementAndInsertHtml('age', res.user['age']);
        }
    }

    static showElementAndInsertHtml(id, value) {
        document.getElementById(id).parentNode.removeAttribute('hidden');
        document.getElementById(id).innerHTML = value;
    }

}

new ShowUserInfo();