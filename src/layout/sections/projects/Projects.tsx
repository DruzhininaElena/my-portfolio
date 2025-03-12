import {SectionTitle} from '../../../components/sectionTitle/SectionTitle.tsx';
import {Project} from './project/Project.tsx';
import {projectsData, tabItems, tabStatusType} from './ProjectsData.ts';
import {Container} from '../../../components/container/Container.ts';
import React, {useState} from 'react';
import {S} from './Projects_Styles.ts';
import {TabMenu} from './tabMenu/TabMenu.tsx';
import {AnimatePresence, motion } from "motion/react"

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
                    <AnimatePresence>
                        {filteredProjects.map((proj) => {
                            return (
                                <motion.article
                                    key={proj.id}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    layout
                                >
                                    <Project {...proj}
                                             key={proj.id}
                                    />
                                </motion.article>
                            )
                        })}
                    </AnimatePresence>
                </S.ProjectsWrapper>
            </Container>
        </S.StyledProjects>
    );
};

