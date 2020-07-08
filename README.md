# ThePetParlor
A Small Business specializing in pet hygiene care

## Table of Contents
* [Concept](https://github.com/AllainPurrnal/ThePetParlor#concept)

* [Technology](https://github.com/AllainPurrnal/ThePetParlor#technology)

* [Setup & Installation](https://github.com/AllainPurrnal/ThePetParlor#setup--installation)

* [Development Changelog](https://github.com/AllainPurrnal/ThePetParlor#development-changelog)
  * [25 June, 2020](https://github.com/AllainPurrnal/ThePetParlor#25-june-2020)
  * [26 May, 2020](https://github.com/AllainPurrnal/ThePetParlor#26-may-2020)

## Concept
**Design**
* The design concept of ThePetParlor is to invoke a feeling of friendliness and softness, much like our four-legged friends trotting around our homes. A contrast to the many designs filling the web, with harsh edges and and striking animations and images. The approach to design calls for minimalism but with the friendliness of curved lines and soft color palettes to bring a sense of ease to the user.

**Technology**
* My goal for this website is to rely less on established front-end libraries like Bootstrap to increase my knowledge and agility when it comes to vanilla HTML and CSS styling. I want to make sure the app is as light as possible, using only the most necessary libraries and framework to get the job done.

## Technology
**Front-End**

1. [React.js](https://reactjs.org/) - A JavaScript Library used to create user-interfaces
2. [Axios](https://github.com/axios/axios) - Performs HTTP Requests to the back-end server
    
**Back-End**

1. [Express.js](https://expressjs.com/) - Used to create the back-end server and api
2. [MongoDB](https://www.mongodb.com/) - Document-based database to store user profiles and appointments

## Setup & Installation
* Setup is simple and requires only a few commands to get up and runningg

* Clone the Repository to your local machine and cd into the folder

* Once in the folder run: ` npm i ` and ` npm run client-install `
  * Running both commands should install all dependencies in the server and client package-json

* Before running the app, please obtain a [MongoDB Connection Link](https://www.mongodb.com/) for database functionality to work
  1. Open up the sample.env file
  2. Paste your connection link between the quotations
  3. Save and rename the file to .env

* After installation, run ` npm run dev `
  * This command will start both the server and client on host 5000 and 3000 respectively

## Development Changelog
#### 25 June, 2020
* A small update before I continue development.

* The login popup modal is up and running, Registration option is still under development.

* The next goal is to finish the addition of Registration options and then move on to final design and placeholders.

* Login Modal
![Screenshot from 2020-06-25 14-14-02](https://user-images.githubusercontent.com/25943488/85798562-8486f780-b6f2-11ea-9b2a-ee9f24cc4d64.png)

#### 26 May, 2020
* The current state of the website has the wireframe of key components as well as a "finished" navbar design.

* Page design will follow the navbar in differing colors to signify a change in page. Home page will have it's main color and so will the Services, About, and Contact page.

* Home Page still needs to be updated to use CSS Grids

* Photos Archived on [flickr](https://www.flickr.com/photos/189053076@N02/albums/72157714859885368/with/50044490028/)
