import {SectionTitle} from '../../../components/sectionTitle/SectionTitle.tsx';
import {Project} from './project/Project.tsx';
import {projectsData, tabItems, tabStatusType} from './ProjectsData.ts';
import {Container} from '../../../components/container/Container.ts';
import React, {useState} from 'react';
import {S} from './Projects_Styles.ts';
// import {FlexWrapper} from '../../../components/FlexWrapper.ts';
import {TabMenu} from './tabMenu/TabMenu.tsx';

export const Projects: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')

    const filteredProjects = projectsData.filter((proj) =>
        currentFilterStatus === 'all' ? true : proj.type === currentFilterStatus,
    );

    function changeFilterStatus(value: tabStatusType): void {
        setCurrentFilterStatus(value)
    }


    return (
        <S.StyledProjects id={'projects'}>
            <Container>
                <SectionTitle title={'Projects'}/>
                <TabMenu tabItems={tabItems} changeFilterStatus={changeFilterStatus}/>
                <S.ProjectsWrapper >
                    {filteredProjects.map((proj) => <Project {...proj} key={proj.id}/>)}
                </S.ProjectsWrapper>
            </Container>
        </S.StyledProjects>
    );
};

