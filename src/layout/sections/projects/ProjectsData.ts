import calculator from '../../../assets/images/projects/calculator.webp';
import topMovies from '../../../assets/images/projects/top-movies.webp';
import todo from '../../../assets/images/projects/todo.webp';
import counter from '../../../assets/images/projects/counter.webp';
import rickAndMorty from '../../../assets/images/projects/rick-and-morty.webp';

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
        title: 'Tasks Manager',
        description: 'A Todo List app in JavaScript is a simple web application that helps users create, manage, and track their tasks.',
        imageSrc: todo,
        type: 'react',
        projectSrc: 'https://druzhininaelena.github.io/todo-react/',
        gitHubSrc: 'https://github.com/DruzhininaElena/todo-react',
    },
    {
        id: 2,
        title: 'IMDB Top 250',
        description: 'The application fetches data from the IMDb API, showcasing essential details such as film titles, release years, ratings, directors, and brief plot descriptions. ',
        imageSrc: topMovies,
        type: 'vue',
        projectSrc: 'https://druzhininaelena.github.io/top-movies-app/',
        gitHubSrc: 'https://github.com/DruzhininaElena/top-movies-app'
    },
    {
        id: 3,
        title: 'Counter',
        description: 'A simple yet stylish counter built with React and TypeScript. Featuring: increment/decrement buttons, reset functionality, LocalStorage persistence',
        imageSrc: counter,
        type: 'react',
        projectSrc: 'https://druzhininaelena.github.io/counter/',
        gitHubSrc: 'https://github.com/DruzhininaElena/counter'
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
    {
        id: 5,
        title: 'Rick-and-Morty-app',
        description: 'This is an application based on the universe of the famous animated series.',
        imageSrc: rickAndMorty,
        type: 'react',
        projectSrc: 'https://druzhininaelena.github.io/rick-and-morty/',
        gitHubSrc: 'https://github.com/DruzhininaElena/rick-and-morty'
    },
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