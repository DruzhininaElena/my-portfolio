import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {SectionTitle} from '../../../components/SectionTitle.tsx';
import {Skill} from './skill/Skill.tsx';
import {SkillsData} from './SkillsData.ts';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} gap={'5px'} justify={'space-between'}>
                {SkillsData.map(skill => <Skill {...skill} key={skill.iconId}/>)}
            </FlexWrapper>
        </StyledSkills>
    );
}

const StyledSkills = styled.section`
    background-color: #e1d4ed;
    min-height: 100vh;
`
