export default class ShareAction {
    constructor() {
        // check if btnPublishAction exists
        if (document.getElementById('btnShareAction')) {
            document.getElementById('btnShareAction').addEventListener("click", ShareAction.shareAction);
        }
    }

    // Create and Publish User's Action
    // This method is associated with the "btnPublishAction" click
    static shareAction() {
        // Constructing a UserAction Object
        const act = new gigya.socialize.UserAction();

        act.setTitle("This is a test title");  // Setting the Title
        act.setLinkBack("https://demo.gigya.com/about.php");  // Setting the Link Back
        act.setDescription("This is a test Description");   // Setting Description
        act.addActionLink("Read More", "https://demo.gigya.com/about.php");  // Adding Action Link
        
        // Adding a Media Item (image)
        act.addMediaItem( { type: 'image', src: 'https://demo.gigya.com/images/300x250_myoss_3frames-lg.gif', href: 'https://demo.gigya.com/about.php' });
        
        const params = {
            userAction:act,
            showMoreButton: true,
            showEmailButton: true
        };
        
        // Show the "Share" dialog
        gigya.socialize.showShareUI(params);
    }
}
