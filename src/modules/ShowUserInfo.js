export default class ShowUserInfo {
    constructor() {
        ShowUserInfo.getUserInfo();
        ShowUserInfo.showAddConnectionsUI();
    }

    // Gets user information
    static getUserInfo() {
        // get user info
        gigya.socialize.getUserInfo({
            callback: ShowUserInfo.renderUserInformation
        });
        // register for connect status changes
        gigya.socialize.addEventHandlers({
            onConnectionAdded: ShowUserInfo.renderUserInformation,
            onConnectionRemoved: ShowUserInfo.renderUserInformation
        });
    }

    // Shows the connected social media on this app
    static showAddConnectionsUI() {
        gigya.socialize.showAddConnectionsUI({
            height: 65,
            width: 175,
            showTermsLink: false,
            containerID: "divConnect"
        });
    }

    // Renders information needed for the user
    static renderUserInformation(res) {
        // Inject the user's nickname
        if (res.user['nickname'] !== '') {
            ShowUserInfo.showParentElementAndInsertHtml('nickname', res.user['nickname']);
        }

        // Inject the login provider
        if (res.user['loginProvider'] !== '') {
            ShowUserInfo.showParentElementAndInsertHtml('loginProvider', res.user['loginProvider']);
        }

        // Inject personalised greeting
        document.getElementById('newUser').innerHTML = res.user["newUser"] === 'true' ? '' : ' back';

        // Inject the user's thumbnail
        if (res.user['thumbnailURL'].length > 0) {
            document.getElementById("photo").src = res.user['thumbnailURL'];
        } else {
            document.getElementById("photo").src = "http://cdn.gigya.com/site/images/bsAPI/Placeholder.gif";
        }

        // Inject the user's birthDay
        if (res.user['birthDay'] !== '' && res.user['birthMonth'] !== '' && res.user['birthYear'] !== '') {
            ShowUserInfo.showParentElementAndInsertHtml('birthDay', res.user['birthDay']);
            ShowUserInfo.showParentElementAndInsertHtml('birthMonth', res.user['birthMonth']);
            ShowUserInfo.showParentElementAndInsertHtml('birthYear', res.user['birthYear']);
        }

        // Inject the user's gender
        if (res.user['gender'] !== '') {
            ShowUserInfo.showParentElementAndInsertHtml('gender', res.user['gender']);
        }

        // Inject the user's email
        if (res.user['email'] !== '') {
            ShowUserInfo.showParentElementAndInsertHtml('email', res.user['email']);
        }

        // Inject the user's country
        if (res.user['country'] !== '') {
            ShowUserInfo.showParentElementAndInsertHtml('country', res.user['country']);
        }

        // Inject the user's state
        if (res.user['state'] !== '') {
            ShowUserInfo.showParentElementAndInsertHtml('state', res.user['state']);
        }

        // Inject the user's city
        if (res.user['city'] !== '') {
            ShowUserInfo.showParentElementAndInsertHtml('city', res.user['city']);
        }

        // Inject the user's zip
        if (res.user['zip'] !== '') {
            ShowUserInfo.showParentElementAndInsertHtml('zip', res.user['zip']);
        }

        // Inject the user's firstName
        if (res.user['firstName'] !== '') {
            ShowUserInfo.showParentElementAndInsertHtml('firstName', res.user['firstName']);
        }

        // Inject the user's lastName
        if (res.user['lastName'] !== '') {
            ShowUserInfo.showParentElementAndInsertHtml('lastName', res.user['lastName']);
        }

        // Inject the user's age
        if (res.user['age'] !== '') {
            ShowUserInfo.showParentElementAndInsertHtml('age', res.user['age']);
        }
    }

    // Shows the parent element and sets the value of the element
    static showParentElementAndInsertHtml(id, value) {
        document.getElementById(id).parentNode.removeAttribute('hidden');
        document.getElementById(id).innerHTML = value;
    }
}
