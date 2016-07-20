# KMEETUPS

[![Gitter chat](https://badges.gitter.im/dvh91/kmeetups.png)](https://gitter.im/dvh91/kmeetups "Gitter chat")

https://kmeetup.herokuapp.com/

Internal meetups organization web application for Kaltura.
Will be developed with: Angular 2 (boilerplate with angular-cli), redux (ngrx)

## Features
* Auth with internal organization Active Directory
* Grid of upcoming meetups
* RSVP to meetups
* Invite to meetups
* Create a new meetup
* Each event will include:
  * Title
  * Date and time
  * Organizer
  * Description
  * Location
  * Number of attenders
  * Trend of meetup (trending up or down depends on attenders count compared to last meetup)
  * Videos connected to meetup (from Kino (?))
  * Live stream (needs investigation)
  * Likes and comments
  
The web application at first steps will work with a mock restful server hosted in Heroku.

## Installation
npm install from repo root folder

## Running
ng serve

## Mock server

Based on json-server, see docs in https://github.com/typicode/json-server

* https://kmeetup-be.herokuapp.com/events
* https://kmeetup-be.herokuapp.com/events/1
* https://kmeetup-be.herokuapp.com/profile
