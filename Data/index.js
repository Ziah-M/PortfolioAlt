import * as ROUTES from '../../../core/routes/routes'
import * as P from '../../../private'

const DEFAULT_PROJECT_DATA = {
  name: 'Default Application',
  url: ROUTES.ENTER,
  technologies: ['Tech 1', 'Tech2', 'Tech3'],
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quod mollitia explicabo numquam animi dolore nihil, excepturi impedit eaque doloribus. Repudiandae ipsum, nulla commodi quia itaque rem eos consectetur temporibus. Optio consectetur dignissimos temporibus ratione voluptate. Delectus illo assumenda aliquam officiis consequuntur dolore molestias eveniet! Aspernatur nemo, inventore sapiente voluptatem voluptates eligendi unde perspiciatis ipsum, reprehenderit ipsa harum blanditiis! Quasi veniam praesentium quis? Porro voluptatibus deserunt dolorem numquam recusandae dignissimos suscipit? Deserunt quam amet maiores asperiores ullam sed consequuntur quaerat laboriosam provident consequatur, assumenda eos doloribus ut tempora quis, tempore nemo dolorem! Laboriosam ipsam sint labore eaque expedita ipsum dolore!',
  imgUrl: 'https://i.imgur.com/hni8BNJ.jpg',
}

const GIOVENTINOS = {
  name: 'Gioventinos',
  url: ROUTES.GIOVENTINO,
  technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'],
  description: 'A site for a fictional pizzeria restaurant.',
  imgUrl: 'https://i.imgur.com/hni8BNJ.jpg',
}

const MOVIES_OVERLOAD = {
  name: 'Movie Server',
  url: ROUTES.MOVIE_SERVER,
  technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TmDB API'],
  description: `A site for visually browsing information about movies and actors. Features include:
  -Reviews
  -Trailers
  -Cast
  -Plot Summaries
  -Actor's work
  -Rating movies
  -Logging in to add movies to a 'watch' playlist
  `,
  imgUrl: 'https://i.imgur.com/5gVzFDC.png',
}

const SKILLS = {
  frontend: [
    'React',
    'HTML 5',
    'CSS 3',
    'SASS',
    'styled-components',
    'Redux & Redux Saga',
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
  if (id === 'Gioventinos') return GIOVENTINOS
  if (id === 'Movies Overload') return MOVIES_OVERLOAD
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
