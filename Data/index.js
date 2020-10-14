import * as ROUTES from '../../../core/routes/routes'
import * as P from '../../../private'
import {
  nameMovieSite,
  nameRestaurant,
  nameFull,
  nameFirst,
  gitRestaurant,
  gitMovieSite,
  gitIssueTracker,
} from '../../../private'

export const RESTAURANT = {
  name: `${nameRestaurant}`,
  url: ROUTES.RESTAURANT,
  technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'],
  description: 'A site for a fictional pizzeria restaurant.',
  imgUrl: 'https://i.imgur.com/2qHymLn.jpg',
  git: gitRestaurant,
}

export const MOVIES = {
  name: `${nameMovieSite}`,
  url: ROUTES.MOVIES,
  technologies: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Rest API consumption & Async Handling',
  ],
  description: `An application for browsing information on movies, actors and TV shows. It includes search, detailed information on movies and actors, reviews, trailers, cast information, rating movies, and adding to a playlist.
  `,
  imgUrl: 'https://i.imgur.com/RrT51kx.jpg',
  git: gitMovieSite,
}

export const BUG_TRACKER = {
  name: 'Bug Tracker',
  url: ROUTES.BUG_TRACKER,
  technologies: ['HTML 5', 'CSS 3', 'JavaScript', 'React', 'Redux', 'Firebase'],
  description: `A full-stack bug tracking and ticket management web app. 
  This app was built with React and uses Redux with Redux thunks for state management.
  Firebase is used for the back-end. The app comes with a demo admin-mode that simulates all CRUD operations without affecting the integrity of the data in the database.
  The app also features user authentication, session management, and role-based authorization.
  `,
  imgUrl: 'https://i.imgur.com/dxoZk6t.jpg',
  git: gitIssueTracker,
}

export const SKILLS = {
  frontend: [
    'React',
    'HTML 5',
    'CSS 3',
    'SASS',
    'styled-components',
    'Redux & Redux Thunks',
    'Bootstrap',
    'Greensock Animation Platform',
    'Jest',
    'Enzyme',
    'Axios',
  ],
  backend: [
    'Firebase',
    'Node.js',
    'NPM',
    'Webpack',
    'vb.NET',
    'JSON',
    'XML',
    'RegEx',
  ],
  tools: ['Git, Github & Bitbucket', 'Gitbash', 'UiPath RPA', 'VSCode'],
  other: ['Responsive Design', 'Google Analytics', 'Sales & Marketing'],
}

export const NAME_FULL = `${P.nameFull}`

export const NAME_FIRST = `${P.nameFirst}`

export const ABOUT = `
Hi, I'm ${NAME_FIRST} and I'm a front-end web developer. I love working with HTML, CSS, JavaScript and the React framework and ecosystem, to solve problems and create aesthetic, responsive, and performant modern web applications that delight users. My goal is to become better every day in all the intricacies of web development, and to learn new technologies, on the path to becoming a full-stack engineer.`
