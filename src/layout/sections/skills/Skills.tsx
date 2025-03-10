import {SectionTitle} from '../../../components/sectionTitle/SectionTitle.tsx';
import {Icon} from '../../../components/icon/Icon.tsx';
import {SkillsData} from './SkillsData.ts';
import {Container} from '../../../components/container/Container.ts';
import {S} from './Skills_Styles.ts';
import React from 'react';

export const Skills: React.FC = () => {
    return (
        <S.StyledSkills id={'skills'}>
            <Container>
                <SectionTitle title={'Skills'}/>
                <S.GridWrapper>
                    {SkillsData.map(skill => <Icon {...skill} key={skill.iconId}/>)}
                </S.GridWrapper>
            </Container>
        </S.StyledSkills>
    );
}
