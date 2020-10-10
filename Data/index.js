import * as ROUTES from '../../../core/routes/routes'
import * as P from '../../../private'
import { nameMovieSite, nameRestaurant } from '../../../private'

const DEFAULT_PROJECT_DATA = {
  name: 'Default Application',
  url: ROUTES.ENTER,
  technologies: ['Tech 1', 'Tech2', 'Tech3'],
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quod mollitia explicabo numquam animi dolore nihil, excepturi impedit eaque doloribus. Repudiandae ipsum, nulla commodi quia itaque rem eos consectetur temporibus. Optio consectetur dignissimos temporibus ratione voluptate. Delectus illo assumenda aliquam officiis consequuntur dolore molestias eveniet! Aspernatur nemo, inventore sapiente voluptatem voluptates eligendi unde perspiciatis ipsum, reprehenderit ipsa harum blanditiis! Quasi veniam praesentium quis? Porro voluptatibus deserunt dolorem numquam recusandae dignissimos suscipit? Deserunt quam amet maiores asperiores ullam sed consequuntur quaerat laboriosam provident consequatur, assumenda eos doloribus ut tempora quis, tempore nemo dolorem! Laboriosam ipsam sint labore eaque expedita ipsum dolore!',
  imgUrl: 'https://i.imgur.com/hni8BNJ.jpg',
}

const GIOVENTINOS = {
  name: `${nameRestaurant}`,
  url: ROUTES.RESTAURANT,
  technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'],
  description: 'A site for a fictional pizzeria restaurant.',
  imgUrl: 'https://i.imgur.com/PWomAoC.jpg',
}

const MOVIES_OVERLOAD = {
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
  imgUrl: 'https://i.imgur.com/5gVzFDC.png',
}

const BUG_TRACKER = {
  name: 'Bug Tracker',
  url: ROUTES.BUG_TRACKER,
  technologies: ['HTML 5', 'CSS 3', 'JavaScript', 'React', 'Redux', 'Firebase'],
  description: `A full-stack bug tracking and ticket management web app. 
  This app was built with React and uses Redux with Redux thunks for state management.
  Firebase is used for the back-end. The app comes with a demo admin-mode that simulates all CRUD operations without affecting the integrity of the data in the database.
  The app also features user authentication, session management, and role-based authorization.
  `,
  imgUrl: 'https://i.imgur.com/lo89Qq7.jpg',
}

const SKILLS = {
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

export const getProjectData = (id) => {
  if (id === `${nameRestaurant}`) return GIOVENTINOS
  if (id === `${nameMovieSite}`) return MOVIES_OVERLOAD
  if (id === 'Bug Tracker') return BUG_TRACKER
  return DEFAULT_PROJECT_DATA
}

export const getName = () => ({
  first: P.nameFirst,
  last: P.nameLast,
})

export const ABOUT = `
Hi, I'm ${
  getName().first
} and I'm a front-end web developer. I love working with HTML, CSS, JavaScript and the React framework and ecosystem, to solve problems and create aesthetic, responsive, and performant modern web applications that delight users. My goal is to become better every day in all the intricacies of web development, and to learn new technologies, on the path to becoming a full-stack engineer.`

export const getSkills = () => SKILLS

export const getAbout = () => ABOUT
