The content below is an example project proposal / requirements document. Replace the text below the lines marked "__TODO__" with details specific to your project. Remove the "TODO" lines.

(___TODO__: My project name_)

# Perfect Roommate

## Overview

## Breif Project Description.

First year in college and dorming? Well, you better have roommate(s) with similar interests. Otherwise, it is going to be another level of stress /anxiety added to your newly started academic career. That is where you can count on Perfect Roommate.

Perfect Roommate is a web applcation where you will sign up for an account. Upon signing up, it will ask you some additional questions. Then there the magic happens!!! It will find you roommates based on similar interests.

Now that you have a like minded person with you, tackling your academic career would be much more exciting and easier.  

## Data Model

(___TODO__: a description of your application's data and their relationships to each other_) 

The application will store **Users**, list of questions(we will call it **Questionnaire**) for the user to answer upon singing up and a list (we will call it **UserInfo**) that has a user reference, list of the questionnaires, the user's answers to the questionnaires and a *rank* to calculate the matches with other users.

### User 
- a user should have login info (first name, last name, email, gender, bithday, password hash etc.)
- a list of users(**matches**) with similar interests (could be empty).

### Questionnaire
- contains list of questions to be asked to the user.

### UserInfo
- contains list of users.
- each user's answers to the questionnaires.
- a rank for the user to calculate matches.


(___TODO__: sample documents_)

An Example of a **User**:

```javascript
{
    firstName: "Mir",
    lastName: "Ahmed",
    username: "mirahmed65(has to be unique)",
    hash: // a password hash,
    matches: [{'a user'}, {'another user'}]// an array of refereces to other like minded users.
}
```

An Example of **Questionnaire**:

```javascript
{
    questionnaire: {questions: [
        'How likely you are to cook food at home?',
        'How likey you are to study at library rather than in your dorm?',
        '..........'
        ]}
}
```

An Example of **UserInfo**:

```javascript
{
    user: // a reference to a user
    answers: [5, 6, 4, 5] // the answers to the questions(questions are based on rate of 1 to 5)
    rank: // a rank assigned to the user based on the answers.
}
```

## [Link to Commented First Draft Schema](db.js) 

(___TODO__: create a first draft of your Schemas in db.js and link to it_)

## Wireframes

(___TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc._)

/login - page for login or sign up

![roommate](documentation/sign-in.PNG)

/questionnaires - page for showing all the questions

![roommate](documentation/questionnaires.PNG)

/matches - page for showing all the macthes found

![roommate](documentation/matches.PNG)

/likes - page for showing roommate(s) a user liked

![roommate](documentation/likes.PNG)

/profile - page for showing a user's profile

![roommate](documentation/profile.PNG)

/changequestion - page for chnaging answer to questionnaires

![roommate](documentation/make-changes.PNG)

/settings - page for account settings

![roommate](documentation/settings.PNG)

## Site map

(___TODO__: draw out a site map that shows how pages are related to each other_)

Here's a [complex example from wikipedia](https://upload.wikimedia.org/wikipedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

## User Stories or Use Cases

(___TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://www.mongodb.com/download-center?jmp=docs&_ga=1.47552679.1838903181.1489282706#previous)_)

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can create a new grocery list
4. as a user, I can view all of the grocery lists I've created in a single list
5. as a user, I can add items to an existing grocery list
6. as a user, I can cross off items in an existing grocery list

## Research Topics

(___TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed_)

* (5 points) Integrate user authentication
    * I'm going to be using passport for user authentication
    * And account has been made for testing; I'll email you the password
    * see <code>cs.nyu.edu/~jversoza/ait-final/register</code> for register page
    * see <code>cs.nyu.edu/~jversoza/ait-final/login</code> for login page
* (4 points) Perform client side form validation using a JavaScript library
    * see <code>cs.nyu.edu/~jversoza/ait-final/my-form</code>
    * if you put in a number that's greater than 5, an error message will appear in the dom
* (5 points) vue.js
    * used vue.js as the frontend framework; it's a challenging library to learn, so I've assigned it 5 points

10 points total out of 8 required points (___TODO__: addtional points will __not__ count for extra credit_)


## [Link to Initial Main Project File](app.js) 

(___TODO__: create a skeleton Express application with a package.json, app.js, views folder, etc. ... and link to your initial app.js_)

## Annotations / References Used

(___TODO__: list any tutorials/references/etc. that you've based your code off of_)

1. [passport.js authentication docs](http://passportjs.org/docs) - (add link to source code that was based on this)
2. [tutorial on vue.js](https://vuejs.org/v2/guide/) - (add link to source code that was based on this)
