import {Header} from './layout/header/Header.tsx';
import {Main} from './layout/sections/main/Main.tsx';
import {Skills} from './layout/sections/skills/Skills.tsx'
import {Projects} from './layout/sections/projects/Projects.tsx';
import {Testimony} from './layout/sections/testimony/Testimony.tsx';
import {Contacts} from './layout/sections/contacts/Contacts.tsx';
import {Footer} from './layout/Footer/Footer.tsx';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/Theme.ts';


function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Testimony/>
            <Contacts/>
            <Footer/>
        </ThemeProvider>
    )
}

export default App

