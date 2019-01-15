# Gigya Social Login JS Sample

This Web App is a demonstration of Gigya's Social Login API.

![Gigya](Gigya.gif)

### Prerequisites

* node
* npm
* use of modern browser to view the web app

### Start the dev server

* run `npm install` to install needed dependencies (only `http-server` in this case)
* run `npm start` to start the `http-server`

### Features

* Users can sign in using any of the social profiles supported by Gigya's API.
* During the login process if the user's email is not present in the User object given in the response from Gigya's API, the is prompted to provide his email address before redirecting to the next page
* `timesLoggedIn` cookie gets created the first time a user logs in having as initial value 1 which gets incremented every time the user logs back in the application. This cookie's expiration date is one year after the user's last log in.
* Once logged in the user gets a personalised greeting (depending if he is a new user or not) and is able to view useful information for his profile gathered during the sign in process.
* Once logged in the user is able to share a post and log out using Gigya's API.

### Documentation

The project contains 2 main directories: `js` and `css` and 2 `html` files in the root directory: `a.html` and `b.html`.

#### html files

`a.html` is the starting screen. In this screen the user is able to select the social login that he would like to use to sign in.
`b.html` contains useful information about the user, gathered from the login process. In addition to that in this screen the user is able to share a post and logout using Gigya's API.

#### js

`js` contains the `javascript` files needed for the `html` files.

#### css

`css` contains the `css` files needed for the `html` files.

### MISSIONS

In `a.html` mission is to:
Run these pages with your favorite web server.
				
Tip: call up the page using localhost as the domain (this will allow the Gigya API key to work properly):
http://localhost/.../a.html

1) Add the Gigya login component showLoginUI within a container
2) After authentication, redirect to b.html
3) Bonus points: from the authentication response, if email is not
present in the User object, prompt the user to enter an email, then
redirect to b.html (no need to persist email, just ask for it)
(hint: you will need to use addEventHandlers for the onLogin event)
4) Bonus-bonus points: show some kind of counter or flag indicating how
many times the user has logged in (e.g., use a cookie or database).
(You can use whatever server-side or client-side implementation you want)

In `b.html` mission is to:
1) At first to enhance the user experience by providing more detail from input parameters
2) Add the Gigya connect component, showAddConnectionsUI, in a containing div
3) From the events generated by the connection component, indicate the connected
social network providers on the page (hint: you will need to use addEventHandlers)
4) Modify the logout (below) to use the Gigya logout API call
5) Bonus points: add a sharing experience, either via publishUserAction or showShareUI

(Note: while implementation is important, layout and user experience also matters.)
