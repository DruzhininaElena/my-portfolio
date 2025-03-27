import calculator from '../../../assets/images/projects/calculator.webp';
import topMovies from '../../../assets/images/projects/top-movies.webp';
import todo from '../../../assets/images/projects/todo.webp';
import couter from '../../../assets/images/projects/counter.webp';

// import imageProject2Webp from '../../../assets/images/projects/project2.webp';
// import imageProject3Webp from '../../../assets/images/projects/project3.webp';

type projectDataType = {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    type: string;
    projectSrc?: string;
    gitHubSrc?: string

}
export const projectsData: projectDataType[] = [
    {
        id: 1,
        title: 'IMDB Top 250',
        description: 'The application fetches data from the IMDb API, showcasing essential details such as film titles, release years, ratings, directors, and brief plot descriptions. ',
        imageSrc: topMovies,
        type: 'vue',
        projectSrc: 'https://druzhininaelena.github.io/top-movies-app/',
        gitHubSrc: 'https://github.com/DruzhininaElena/top-movies-app'
    },
    {
        id: 2,
        title: 'Counter',
        description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
        imageSrc: couter,
        type: 'react',
        projectSrc: 'https://druzhininaelena.github.io/counter/',
        gitHubSrc: 'https://github.com/DruzhininaElena/counter'
    },
    {
        id: 3,
        title: 'TODO-app',
        description: 'A Todo List app in JavaScript is a simple web application that helps users create, manage, and track their tasks.',
        imageSrc: todo,
        type: 'js',
        projectSrc: 'https://druzhininaelena.github.io/todo/',
        gitHubSrc: 'https://github.com/DruzhininaElena/todo',
    },
    {
        id: 4,
        title: 'Calculator-app',
        description: 'This is a simple web application that allows users to perform basic mathematical operations such as addition, subtraction, multiplication, and division.',
        imageSrc: calculator,
        type: 'vue',
        projectSrc: 'https://druzhininaelena.github.io/calculator-app/',
        gitHubSrc: 'https://github.com/DruzhininaElena/calculator-app'
    },
    // {
    //     id: 5,
    //     title: 'Project Name2',
    //     description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
    //     imageSrc: imageProject2Webp,
    //     type: 'react'
    // },
    // {
    //     id: 6,
    //     title: 'Project Name3',
    //     description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
    //     imageSrc: imageProject3Webp,
    //     type: 'react'
    // }
]

export type tabStatusType = 'all' | 'vue' | 'react' | 'js'

export type tabItemsType = {
    id: number;
    title: string;
    status: tabStatusType

}

export const tabItems: tabItemsType[] = [
    {
        id: 1,
        title: 'All',
        status: 'all'
    },
    {
        id: 2,
        title: 'React',
        status: 'react'
    },
    {
        id: 3,
        title: 'Vue',
        status: 'vue'
    },
    {
        id: 4,
        title: 'JS',
        status: 'js'
    }
]