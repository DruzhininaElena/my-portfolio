import {Icon} from '../../../../components/icon/Icon.tsx';
import styled from 'styled-components';
import {FlexWrapper} from '../../../../components/FlexWrapper.tsx';

type SkillPropsType = {
    iconId: string;
    title: string
    iconViewBox?: string
}

export const Skill = ({iconId, title, iconViewBox}: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} align={'center'}>
                <Icon iconId={iconId} viewBox={iconViewBox}/>
                <SkillTitle>{title}</SkillTitle>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    background-color: rgba(255, 255, 255, 0.22);
    width: 16%;
`

const SkillTitle = styled.h3`
    text-align: center;
`