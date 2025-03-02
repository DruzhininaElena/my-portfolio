import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle.tsx';
import {Skill} from './skill/Skill.tsx';
import {SkillsData} from './SkillsData.ts';
import {Container} from '../../../components/container/Container.tsx';

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle title={'Skills'}/>
                <GridWrapper>
                    {SkillsData.map(skill => <Skill {...skill} key={skill.iconId}/>)}
                </GridWrapper>
            </Container>

        </StyledSkills>
    );
}

const StyledSkills = styled.section`
    margin-bottom: 144px;
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-content: space-between;
    gap: 74px 0;
    justify-items: center;
`
