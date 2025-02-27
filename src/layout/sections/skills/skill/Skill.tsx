import {Icon} from '../../../../components/icon/Icon.tsx';
import styled from 'styled-components';

type SkillPropsType = {
    iconId: string;
    title: string
    iconViewBox?: string
}

export const Skill = ({iconId, title, iconViewBox}: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={iconId} viewBox={iconViewBox}/>
            <SkillTitle>{title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    background-color: rgba(255, 255, 255, 0.22);
    max-width: 120px;
`

const SkillTitle = styled.h3`
    text-align: center;
`