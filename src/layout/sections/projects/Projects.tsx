import {SectionTitle} from '../../../components/sectionTitle/SectionTitle.tsx';
import {Project} from './project/Project.tsx';
import {projectsData} from './ProjectsData.ts';
import {Container} from '../../../components/container/Container.ts';
import React from 'react';

export const Projects: React.FC = () => {
    return (
        <section id={'projects'}>
            <Container>
                <SectionTitle title={'Projects'}/>
                {projectsData.map((item) => <Project {...item} key={item.id}/>)}
            </Container>
        </section>
    );
};

