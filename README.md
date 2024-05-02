# Time Tracker

This project is a simple time tracker that allows users to track their work by adding entries detailing the project worked on and the number of hours. Users are then able to see their weekly work summary and the totals for each project.

## How to Use

After cloning the repo using https://github.com/moseshsu01/time-tracker.git, run

### `docker-compose up`

in the root folder. This will deploy the database, server, and frontend containers.
Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

Tests can be ran in the server folder with

### `npm test`


## Notes

The default timezone for this project is America/Vancouver. If you wish to change it, please do so in lines 6 and 20 in the [docker-compose file] (docker-compose.yml).
