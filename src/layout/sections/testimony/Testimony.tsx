import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle.tsx';
import {Icon} from '../../../components/icon/Icon.tsx';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {Slider} from '../../../components/slider/Slider.tsx';
import {Container} from '../../../components/container/Container.tsx';
import {theme} from '../../../styles/Theme.ts';

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle title={'Testimony'}/>
                    <SliderWrapper>
                        <IconWrapper className={'firstQuote'}>
                            <Icon iconId={'quote'} width={'30'} height={'30'} viewBox={'0 0 50 50'}/>
                        </IconWrapper>
                        <Slider/>
                        <IconWrapper className={'secondQuote'}>
                            <Icon iconId={'quote'} width={'30'} height={'30'} viewBox={'0 0 50 50'}/>
                        </IconWrapper>
                    </SliderWrapper>
                    <Pagination>
                        <span></span>
                        <span className={'active'}></span>
                        <span></span>
                    </Pagination>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
}

const StyledTestimony = styled.section`

`
const SliderWrapper = styled.div`
    background-color: ${theme.colors.secondaryBg};
    border-radius: 24px;
    max-width: 500px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 49px 0 20px;

    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);

    position: relative;
`

const IconWrapper = styled.div`
    &.firstQuote {
        align-self: flex-start;
    }
    &.secondQuote {
        align-self: flex-end;
    }
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: ${theme.colors.secondaryFont};
        border-radius: 50%;
    }

    span.active {
        background-color: ${theme.colors.accent};
        width: 20px;
        border-radius: 20px;
    }
    
    span + span {
        margin-left: 5px;
    }
`