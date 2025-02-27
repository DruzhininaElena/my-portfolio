import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle.tsx';
import {Icon} from '../../../components/icon/Icon.tsx';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {Slider} from '../../../components/slider/Slider.tsx';

export const Testimony = () => {
    return (
        <StyledTestimony>
            <FlexWrapper direction={'column'} align={'center'}>
                <SectionTitle>Testimony</SectionTitle>
                <Icon iconId={'quote'} width={'50'} height={'50'} viewBox={'0 0 50 50'}/>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
}

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: #fffff2;
`