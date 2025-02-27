import {SectionTitle} from '../../../components/SectionTitle.tsx';
import styled from 'styled-components';
import {Project} from './project/Project.tsx';
import {projectsData} from './ProjectsData.ts';

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            {projectsData.map((item) => <Project {...item} key={item.id}/>)}
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    background-color: #ecffec;
    min-height: 100vh;
`
