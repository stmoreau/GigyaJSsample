export default class ShowUserInfo {
  constructor() {
    ShowUserInfo.getUserInfo();
    ShowUserInfo.showAddConnectionsUI();
  }

  // Gets user information
  static getUserInfo() {
    // get user info
    gigya.socialize.getUserInfo({
      callback: ShowUserInfo.handleUserInformation,
    });
    // register for connect status changes
    gigya.socialize.addEventHandlers({
      onConnectionAdded: ShowUserInfo.renderUserInformation,
      onConnectionRemoved: ShowUserInfo.renderUserInformation,
    });
  }

  // Shows the connected social network provider on this app
  static showAddConnectionsUI() {
    gigya.socialize.showAddConnectionsUI({
      height: 65,
      width: 175,
      showTermsLink: false,
      containerID: 'divConnect',
    });
  }

  // Changes the window location if there is no logged in user
  static handleUserInformation(res) {
    if (res.user.nickname) {
      ShowUserInfo.renderUserInformation(res.user);
    } else {
      window.location = 'login';
    }
  }

  // Renders information needed for the user
  static renderUserInformation(user) {
    // Inject the user's nickname
    ShowUserInfo.showParentElementAndInsertHtml('nickname', user.nickname);

    // Inject the login provider
    if (user.loginProvider !== '') {
      ShowUserInfo.showParentElementAndInsertHtml('loginProvider', user.loginProvider);
    }

    // Inject personalised greeting
    document.getElementById('newUser').innerHTML = user.newUser === 'true' ? '' : ' back';

    // Inject the user's thumbnail
    if (user.thumbnailURL.length > 0) {
      document.getElementById('photo').src = user.thumbnailURL;
    } else {
      document.getElementById('photo').src = 'http://cdn.gigya.com/site/images/bsAPI/Placeholder.gif';
    }

    // Inject the user's birthDay
    if (user.birthDay !== '' && user.birthMonth !== '' && user.birthYear !== '') {
      ShowUserInfo.showParentElementAndInsertHtml('birthDay', user.birthDay);
      ShowUserInfo.showParentElementAndInsertHtml('birthMonth', user.birthMonth);
      ShowUserInfo.showParentElementAndInsertHtml('birthYear', user.birthYear);
    }

    // Inject the user's gender
    if (user.gender !== '') {
      ShowUserInfo.showParentElementAndInsertHtml('gender', user.gender);
    }

    // Inject the user's email
    if (user.email !== '') {
      ShowUserInfo.showParentElementAndInsertHtml('email', user.email);
    }

    // Inject the user's country
    if (user.country !== '') {
      ShowUserInfo.showParentElementAndInsertHtml('country', user.country);
    }

    // Inject the user's state
    if (user.state !== '') {
      ShowUserInfo.showParentElementAndInsertHtml('state', user.state);
    }

    // Inject the user's city
    if (user.city !== '') {
      ShowUserInfo.showParentElementAndInsertHtml('city', user.city);
    }

    // Inject the user's zip
    if (user.zip !== '') {
      ShowUserInfo.showParentElementAndInsertHtml('zip', user.zip);
    }

    // Inject the user's firstName
    if (user.firstName !== '') {
      ShowUserInfo.showParentElementAndInsertHtml('firstName', user.firstName);
    }

    // Inject the user's lastName
    if (user.lastName !== '') {
      ShowUserInfo.showParentElementAndInsertHtml('lastName', user.lastName);
    }

    // Inject the user's age
    if (user.age !== '') {
      ShowUserInfo.showParentElementAndInsertHtml('age', user.age);
    }
  }

  // Shows the parent element and sets the value of the element
  static showParentElementAndInsertHtml(id, value) {
    document.getElementById(id).parentNode.removeAttribute('hidden');
    document.getElementById(id).innerHTML = value;
  }
}