import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {SectionTitle} from '../../../components/SectionTitle.tsx';
import {Skill} from './skill/Skill.tsx';
import {SkillsData} from './SkillsData.ts';

export const Skills = () => {
    return (
        <StyledSkills className={'container'}>
            <SectionTitle title={'Skills'}/>
            <FlexWrapper wrap={'wrap'} gap={'15px'} justify={'space-between'} align={'stretch'}>
                {SkillsData.map(skill => <Skill {...skill} key={skill.iconId}/>)}
            </FlexWrapper>
        </StyledSkills>
    );
}

const StyledSkills = styled.section`
    margin-bottom: 144px;
`
