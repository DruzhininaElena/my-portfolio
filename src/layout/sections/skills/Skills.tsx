import {SectionTitle} from '../../../components/sectionTitle/SectionTitle.tsx';
import {Icon} from '../../../components/icon/Icon.tsx';
import {SkillsData} from './SkillsData.ts';
import {Container} from '../../../components/container/Container.ts';
import {S} from './Skills_Styles.ts';
import React from 'react';
import { Fade } from "react-awesome-reveal";


export const Skills: React.FC = () => {
    return (
        <S.StyledSkills id={'skills'}>
            <Container>
                <SectionTitle title={'Skills'}/>
                <S.GridWrapper>
                    <Fade cascade
                          damping={0.1}
                          direction={'up'}>
                        {SkillsData.map(skill => <Icon {...skill} key={skill.iconId}/>)}
                    </Fade>
                </S.GridWrapper>
            </Container>
        </S.StyledSkills>
    );
}
