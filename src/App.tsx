import {Header} from './layout/header/Header.tsx';
import {Main} from './layout/sections/main/Main.tsx';
import {Skills} from './layout/sections/skills/Skills.tsx';
import {Container} from './components/container/Container.tsx';


function App() {
    return (
        <Container>
            <Header/>
            <Main/>
            <Skills/>
        </Container>
    )
}

export default App

