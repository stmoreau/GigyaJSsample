class PublishAction {
    constructor() {
        // check if btnPublishAction exists
        if(document.getElementById('btnPublishAction')){
            document.getElementById('btnPublishAction').addEventListener("click", this.publishAction);
        }
    }

    // Create and Publish User's Action
    // This method is associated with the "btnPublishAction" click
    publishAction() {
        // Constructing a UserAction Object
        var act = new gigya.socialize.UserAction();

        // Adding Action Link
        act.addActionLink("Watch the movie", "https://www.youtube.com/watch?v=jqxENMKaeCU&feature=channel_page");

        // Setting the Title and subtitle
        act.setTitle("This is my title");
        act.setSubtitle("This is my subtitle");

        // Setting Link Back
        act.setLinkBack("http://bit.ly/5MFb2V");
        act.setUserMessage("This is my message to you");
        
        // Parameters for the publishUserAction method,
        // including the UserAction object
        var params = {
            userAction: act,
            callback: ShowUserInfo.publishAction_callback
        };

        // Publish the User Action
        gigya.socialize.publishUserAction(params);
    }

    // Display a status message according to the response from publishUserAction.
    static publishAction_callback(response) {
        switch (response.errorCode) {
            case 0:
                document.getElementById('status').style.color = "green";
                document.getElementById('status').innerHTML = "Newsfeed item sent.";
                break;
            default:
                document.getElementById('status').style.color = "red";
                document.getElementById('status').innerHTML =
                    "Unable to send newsfeed item. Error Code:" +
                    response.errorCode + "; " + response.errorMessage;
        }
    }
}

new PublishAction();