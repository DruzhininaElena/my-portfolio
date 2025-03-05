import {SectionTitle} from '../../../components/SectionTitle.tsx';
import styled from 'styled-components';
import {Project} from './project/Project.tsx';
import {projectsData} from './ProjectsData.ts';
import {Container} from '../../../components/container/Container.tsx';

export const Projects = () => {
    return (
        <StyledProjects id={'projects'}>
            <Container>
                <SectionTitle title={'Projects'}/>
                {projectsData.map((item) => <Project {...item} key={item.id}/>)}
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
`
