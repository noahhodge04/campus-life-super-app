# Grace College Super App
## About
This is a web-site that collects some basic information about Grace College all in one place, in addition to including an excuse generator in the event that a social obligation must be skirted for some reason or another.

Primarily, gathering the information for dining services and the "open hours" of student housing (when female students are allowed in male dormitories and vice versa) acts as a digital counterpart to bulletin boards around campus. While the weather can be found on any weather app and dining information can be found on the college's website, gathering it together with information about open hours provides a single place for students to go for scheduling information.

## Technologies Used
### Languages
HTML, CSS, and JavaScript were the only languages used in this project. HTML provided the structure for the web-site, CSS the styling, and JavaScript the API calls and interactive features.

### API
The [National Weather Service API](https://www.weather.gov/documentation/services-web-api) was used for the weather features of the site, and the [Excuser API](https://excuser-three.vercel.app/) was used for the excuse generator.

### Programming
All of the code was typed out on Visual Studio Code. No AI was used to generate code for this project.

### Deployment, Version Control, and Hosting
GitHub was used for deployment and version control, and the site is hosted on GitHub Pages [here](https://noahhodge04.github.io/campus-life-super-app/index.html).

## Setup
Because all of the APIs used do not require authentication of any sort, the only setup involved is downloading the files. There are no API keys or secrets to acquire or manage. To deploy, make a copy of this repository and enable deployment via GitHub Pages.

## Overview of Features
### Home Page
The home page contains tables of common lookup information on campus. There is also a weather panel that contains the most relevant forecast in the moment, with a hyperlink to the weather page.

### Weather Page
The weather page shows fourteen different "periods" of forecast: day and night for each of the next seven days. Information is readable and simple. Temperature, chance of precipitation, a short description of the conditions, and a picture provided by the NWS are found in each entry.

### Excuses Page
This page features three buttons, each one pertaining to a different sort of excuse. Hittin any of the buttons will generate an excuse below the buttons. If you would like a different excuse, simply press one of the buttons.

## Stretch Goals and Future Features
- Additional information, such as chapel schedules and break dates
- A map of the campus, with the names of buildings and their abbreviations as seen in course schedules
- Todoist API integration to help keep track of assignments
- The rest of the information found on the billboards around campus, like important phone numbers