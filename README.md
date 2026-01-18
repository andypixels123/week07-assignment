////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Build a Database-Driven React App
Overview

Creating and maintaining applications that submit and retrieve information from a database is a fundamental part of web development. Many of the websites and apps we use every day—such as Facebook, Instagram, WordPress, Trello, Moodle, banking apps, Eventbrite, and various fitness-tracking tools—are, at their core, database-driven applications.

Over the next few weeks, you will be tasked with creating a series of database-driven apps with increasing levels of complexity and functionality. You have the freedom to interpret this task in a way that suits your interests and creativity. Whether you choose to build a blog, a recipe-sharing platform, a book/movie/TV tracker, a habit tracker, a sports discussion board, or any other application idea you have, the goal is to apply the concepts you’ve learned and solidify your understanding of how data can be stored, retrieved and manipulated within web applications.
Topics

    React Forms
    Node.js: Express servers, routing
    Databases: PostgreSQL, Supabase
    Relational databases
    React Router

Resources

    React: Forms
    Express Docs: app.get()
    Express Docs: app.post()
    Express Docs
    Express Routing
    PostgreSQL Tutorial
    W3: SQL Joins
    React Router: Tutorial
    React Router: Quick Start

Instructions
User Stories

    🐿️ As a user, I want the app to be fast and responsive so that I can browse without delays.
    🐿️ As a user, I want to read and add posts so that I can interact with the community.
    🐿️ As a user, I want a simple and intuitive form for creating new posts so that the process feels effortless.
    🐿️ As a user, I want to view multiple pages so that I can easily find the content I’m looking for.
    🐿️ As a developer, I want to build a database schema and seed the database with realistic data for accurate testing and development.
    🐿️ As a user, I want to be able to view all of the posts within the database so that I can explore all available content.
    🐿️ As a developer, I want to use .map() to display all posts to efficiently display fetched data.
    🐿️ As a developer, I want to poll my database to render any new data stored in there efficiently.

Requirements

    🎯 Create a client using React.
    🎯 Use Express to create your server, using both GET and POST endpoints.
    🎯 Build a React form for users to create posts.
    🎯 Create multiple pages using React Router.
    🎯 Design a database schema, and seed the database with some realistic data.
    🎯 Use SQL to retrieve posts from the database in your Express server.
    🎯 Display all posts using .map().
    🎯 Use an interval and useEffect() to poll your database.

How to Deploy

This week we need to deploy our React app and our server separately, much like how we did it in week 4, but with some slightly different steps.

The following is for deploying a mono-repo, meaning both the client and the server files are in one folder together. If you’ve not made a mono-repo, the deployment instructions are the same, except you don’t have to alter the ‘root directory’.

<Deploying the Server>
Let’s deploy the server so we can change over any client-side fetch links to the correct URL before we deploy it. First, ensure that everything is pushed to GitHub.

    Click ‘+ New’ and choose ‘Web Service’.
    If you haven’t already, connect your GitHub repositories to Render. Select the intended project and click ‘Connect →’.
    Now, we should see a page with a few sections. Here’s what we need for the server side:
        Root Directory: server (or whatever it has been named in your project)
        Build Command: npm i
        Start Command: node server
        Environment variables: add anything in your server-side .env file in here.
    Now, you can ‘Deploy Web Service’!
    Check your server is working as expected, and make sure to change any localhost links in your client-side code for the render server URL.

<Deploying the Client>
Ensure that everything is pushed to GitHub. You can use either Render or Vercel to deploy your client and Render to deploy your server.
Vercel

    Click ‘Add New…’ and then select ‘Project’.
    ‘Import’ the project, and then ensure the ‘Framework Preset’ is ‘Vite’.
    ‘Edit’ the Root Directory to be ‘client’ (or whatever you named the client file in your project repo).
    Click the ‘Build and Output Settings’ drop-down menu and select ‘Override’ on ‘Build Command’ and ‘Install Command’.
        Build Command: npm run build
        Install Command: npm install
    In the ‘Environment Variables’ drop-down menu, add anything from your client-side .env file here.

Render

    Click ‘+ New’ and choose ‘Static Site’.
    Select the same project and click ‘Connect →’.
    Here is what we need on the options page:
        Root Directory: client (or whatever it has been named in your project)
        Build Command: npm install && npm run build (or npm install; npm run build, as should be pre-filled in for you)
        Publish directory: dist
        Environment variables: add anything in your client-side .env file in here.
    Now, you can ‘Deploy Static Site’!

Stretch Goals

To achieve an 8/8 in your assignment, aim to achieve all of the requirements, plus some extra goals for each section of the marking rubric. This can be excellence in styling or something that demonstrates creativity or innovation in the week’s topics.

Below are some examples of stretch goals and user stories that you could add to your project, but are not expected to.
Stretch User Stories

    🐿️ As a user, I want to access different posts through dynamic pages so that navigation feels smooth.
    🐿️ As a user, I want to explore posts by category using dedicated routes so that I can easily find content that interests me.
    🐿️ As a user, I want to be able to delete my posts so that I can manage my content and remove anything I no longer want to share.
    🐿️ As a user, I want to like posts, increasing their like count, so that I can express my appreciation for content I enjoy.
    🐿️ As a user, I want to filter posts based on different criteria so that I can quickly find the most relevant content for me.

Stretch Requirements

    🏹 Create dynamic pages using react-router.
    🏹 Use react-router to create a dedicated route for the categories
        For example, /posts/:categoryName.
    🏹 Allow users to delete posts.
    🏹 Add ‘like’ functionality on posts.
    🏹 Create additional SQL queries to show filtered posts.

///////////////////////////////////////////////////////////////////////////////////////////////////////
REFLECTION

Please also provide an assignment reflection in your project README.md file.
Required

    🎯 What requirements did you achieve?
    🎯 Were there any requirements or goals that you were unable to achieve?
    🎯 If so, what was it that you found difficult about these tasks?

Optional

🏹 Feel free to add any other reflections you would like to share about your submission, for example:

    Requesting feedback about a specific part of your submission.
    What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
    What errors or bugs did you encounter while completing your assignment? How did you solve them?
    What went really well and what could have gone better?

Submission Instructions

Please submit the server URL, client URL, your GitHub repository link and a screenshot of your Database Schema (and Query Editor, if it was used).
How to send your database schema:

    In Supabase, select the project you have connected to this application.
    In the menu, go to ‘Database’.
    Then, go to ‘Schema Visualiser’.
    Take a screenshot of the tables you’ve used and save it in your files.
    On Moodle, in your submission, click the image icon and follow the instructions.

================================================================================
MY REFLECTION ==================================================================
================================================================================

I made use of my week 4 guestbook assignment as a template and modified all code to create a React app. The database table was already populated with rows of data so I truncated the table and restarted the id count. I then used a seed.js file to re-populate the table. The posts data was originally produced using Google AI to create generic website user comments.

I had issues with deploying to Render, partly due to errors in the Moodle deployment instructions which were later updated.
I made several attempts before it worked.
Render deployment error was - Failed to deploy server, ==> Application exited early
This was caused by app.listen() being commented out in my code, by mistake!!

Render Client deployment also failed a number of times.
I Googled for a solution and also with the help of Manny I needed to remove package-lock.json, package.json and node_modules. I ran 'npm install' again, and 'npm update' and successfully re-deployed.


References
------------
React Documentation -
Researched and utilized <HashLink> for return to top button to function using id="#top" also used on page links without routes. Researched and utilized <Fragment> to add a unique key to a group of elements which was necessary when using map().

Google Ai
----------
I used Google Ai to help with the like button logic. It was helpful but the code returned needed modifying to suit my app. I changed the code to prevent the user from liking more than once on a comment also.

YouTube -
I watched a tutorial about useEffect and adding custom error messages to html in React.

I had a few issues to begin with, mainly with server.js and database queries but figured it all out in the end with reference to previous workshop and demo code.

Google Ai was also used for some of the return to top button logic although I spent a long time with the conditional rendering of this button, (it just wouldn't disappear from the page!) only to find I had a duplicate of the button in the footer component! This meant that it was still showing when it should have been hidden. I replaced an if/else statement in the code generated with the ternary operator currently in use. I also referenced previous workshop code for conditional rendering just to confirm I was doing it right.

Overall, this assignment went well and I feel I now have a better understanding of React and how it reacts!