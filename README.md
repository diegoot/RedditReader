This project is a small project developed using [ReactJS](https://reactjs.org/) and bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It does not use [Redux](https://redux.js.org/) for data flow because it is not needed for the purpose of this project.

For the styles I am using [SASS](https://sass-lang.com/) and [BEM](http://getbem.com/) as a naming convention.

The goal of this project is to consume the Reddit API to get access to the posts in the [funny subreddit](https://www.reddit.com/r/funny/) and then show the first 30 posts. The UI is responsive for mobile and desktop.

## How to install and start the project (development mode)

- Go to your console
- git clone  https://github.com/diegoot/RedditReader.git
- cd RedditReader
- yarn install
- yarn start

## How to easily run a production build (you need npm 5.2+)

- cd RedditReader
- yarn build
- cd build
- npx serve

## Live Demo
Find it [here](http://noiseless-step.surge.sh/).
