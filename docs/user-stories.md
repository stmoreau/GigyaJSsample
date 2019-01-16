# User stories for the project

### As a **User** I want to **be able and sign in using Social Media** Because **it is easier than regular log in**.
```
Scenario: Sign in with social media that supports email
  Given I'm a user
  When I visit /login screen
  And I click on any Social Media presented
  Then I should be prompted to put my credentials for that Social Media and have them automatically used to sign in and get redirected to /welcome

Scenario: Sign in with social media that does not support email
  Given I'm a user
  When I visit /login screen
  And I click on a Social Media presented that does not store my email - like Instagram
  Then I should be prompted to put my credentials for that Social Media
  And an email form should appear in order for me to provide my email to the application
```

### As a **PM** I want to **store how many times the user has logged in** Because **I need this data**.
```
Scenario: Sign in with social media for the first time
  Given I'm a user
  When I visit /login screen
  And I sign in using Social Sign In for the first time
  Then a cookie named 'timesLoggedIn' should get created having 1 as value

Scenario: Sign in with social media not for the first time
  Given I'm a user
  When I visit /login screen
  And I sign in using Social Sign In multiple time
  Then a cookie named 'timesLoggedIn' should get have as value the number of times I have logged in
```

### As a **User** I want to **get a personalised message when logged in** Because **it improves my user experience**.
```
Scenario: New user visits /welcome after logging in
  Given I'm a new user
  When I am signed in and visit /welcome screen
  Then I should see a personalised welcome with my nickname welcoming me

Scenario: Existing user visits /welcome after logging in
  Given I'm not a new user
  When I am signed in and visit /welcome screen
  Then I should see a personalised welcome with my nickname welcoming me back
```

### As a **User** I want to **be able and see important information about my profile** Because **it improves my user experience**.
```
Scenario: User visits /welcome after logging in
  Given I'm a user
  When I am signed in having used a Social Media that has all my information and visit /welcome screen
  Then I should see a card with information about me taken from the social media I signed in with such as my profile picture, my birthday, my email, my first name, my last name, my gender, my country, my state, my city, my zip and my age

Scenario: Existing user visits /welcome after logging in
  Given I'm a user
  When I am signed in having used a Social Media that doesn't have all my information and visit /welcome screen
  Then I should see a card with the information available about me taken from the social media I signed in with
```

### As a **User** I want to **be able and logout** Because **it improves my user experience**.
```
Scenario: User visits /welcome after logging in
  Given I'm a user
  When I am signed in and visit /welcome screen
  Then I should see a logout button that will log me out and change the the window.location to /login
```

### As a **User** I want to **be able and see which Social Media are connected to this web app** Because **it improves my user experience**.
```
Scenario: User visits /welcome after logging in
  Given I'm a user
  When I am signed in and visit /welcome screen
  Then I should see a list of social media with a green tick next to the ones that are currently connected to the application
```

### As a **User** I want to **get redirected when trying to access /welcome without having signed in** Because **this adds an extra layer of protection security wise**.
```
Scenario: User visits /welcome without having logged in
  Given I'm a user
  When I am not signed in and visit /welcome screen
  Then I should get redirected to /login
```
