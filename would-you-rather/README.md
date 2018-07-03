# Would You Rather Project

## To get started

From the project root folder
* install all project dependencies with `npm install`
* start the development server with `npm start`


In your browser url
* enter `http://localhost:3000/`

---------
In your app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

## App Functionality

### Login
The person using the application should impersonate/log in as an existing user using a login dropdown box that allows the user to select a name from the list of existing users.

### Home page (/)
Once the user logs in, the user is able to toggle between his/her answered and unanswered polls on the home page, which is located at the root. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The unanswered questions are shown by default, and the name of the logged in user should be visible on the page.

When a poll is clicked on the home page, the following is shown:

[1] Text “Would You Rather”;
Avatar of the user who posted the polling question; and
Two options.

[2] For answered polls, each of the two options contains the following:

-- Text of the option;<br/>
-- Number of people who voted for that option; <br/>
-- Percentage of people who voted for that option.<br/>
The option selected by the logged-in user should be clearly marked.
<p/>

### Voting
So what happens when someone votes in a poll? 
Upon voting in a poll, all of the information of an answered poll is displayed. Users can only vote once per poll; they are not allowed to change their answer after they’ve voted -- no cheating allowed!

### Add question (/add)
The user can post their own questions! Upon submitting the create a new poll form, a new poll is created.

### Leaderboard (/leaderboard)
The application has a leaderboard that’s available at the /leaderboard route. Each entry on the leaderboard contains the following:

-- User’s name;<br/>
-- User’s picture;<br/>
-- Number of questions the user asked; and<br/>
-- Number of questions the user answered

Users are `ordered` in descending order based on the sum of the number of questions they’ve asked and the number of questions they’ve answered. The more questions user ask and answer, the higher up they move.


### Nav bar
The application has a navigation bar so that the user can easily navigate anywhere in the application.
