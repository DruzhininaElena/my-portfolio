import {Header} from './layout/header/Header.tsx';
import {Main} from './layout/sections/main/Main.tsx';
import {Skills} from './layout/sections/skills/Skills.tsx';
import {Container} from './components/container/Container.tsx';
import {Projects} from './layout/sections/projects/Projects.tsx';


function App() {
    return (
        <Container>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
        </Container>
    )
}

export default App

