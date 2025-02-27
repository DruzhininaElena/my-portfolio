import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {SectionTitle} from '../../../components/SectionTitle.tsx';
import {Skill} from './skill/Skill.tsx';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} gap={'70px'} justify={'space-between'}>
                <Skill iconId={'js'} title={'JavaScript'}/>
                <Skill iconId={'ts'} title={'TypeScript'}/>
                <Skill iconId={'css'} title={'CSS3'} iconViewBox={'7 6 106 106'}/>
                <Skill iconId={'sass'} title={'SASS'} iconViewBox={'0 -15 120 120'}/>
                <Skill iconId={'html'} title={'HTML5'} iconViewBox={'7 6 106 106'}/>
                <Skill iconId={'styledComponent'} title={'Styled components'}/>
                <Skill iconId={'git'} title={'Git'} iconViewBox={'1 1 30 30'}/>
                <Skill iconId={'gitHub'} title={'GitHub'} iconViewBox={'0 0 90 90'}/>
                <Skill iconId={'redux'} title={'Redux'}/>
                <Skill iconId={'react'} title={'React'} iconViewBox={'6 6 108 108'}/>
                <Skill iconId={'vscode'} title={'VScode'} iconViewBox={'3 0 105 105'}/>
                <Skill iconId={'webstorm'} title={'WebStorm'} iconViewBox={'-10 -10 270 270'}/>
            </FlexWrapper>
        </StyledSkills>
    );
}

const StyledSkills = styled.section`
    background-color: #e1d4ed;
    min-height: 100vh;
`
