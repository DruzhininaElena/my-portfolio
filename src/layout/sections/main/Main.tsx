import styled from 'styled-components';
import {Button} from '../../../components/UI/button/Button.tsx';
import {theme} from '../../../styles/Theme.ts';
import {Photo} from './Photo.tsx';

export const Main = () => {
    return (
        <StyledMain id={'main'}>
            <ContentWrapper>
                <Title>Frontend Developer</Title>
                <Name>Hello, my name is Elena Druzhinina</Name>
                <Description>
                    Short text with details about you, what you do or your professional career. You can add more
                    information on the about page.
                </Description>
                <ButtonWrapper>
                    <Button href={'#projects'}>Projects</Button>
                    <Button href={'#'} $outlined>LinkedIn</Button>
                </ButtonWrapper>
            </ContentWrapper>
            <Photo/>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    margin: -80px auto 0;
    max-width: 1440px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    

    @media ${theme.media.desktopLg} {
        flex-direction: column-reverse;
        justify-content: flex-end;
        margin-bottom: 144px;
    }
`
const ContentWrapper = styled.div`
    width: 50%;
    margin-top: 135px;
    padding: 0 92px 0 120px;

    @media ${theme.media.desktopXl} {
        padding-left: 90px;
        padding-right: 0;
    }

    @media ${theme.media.desktopLg} {
        padding: 0 60px;
        margin-top: -20%;
        width: 100%;
    }

    @media ${theme.media.tablet} {
        padding: 0 30px;
    }

    @media ${theme.media.mobile} {
        padding: 0 15px;
        margin-top: -15%;
    }
`
const Title = styled.h1`
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: ${theme.colors.accent};

    @media ${theme.media.desktopXl} {
        width: 100%;
        margin-top: 0;
    }
`

const Name = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: calc((100vw - 375px) / (1440 - 375) * (63 - 42) + 42px);
    line-height: 1.2;
`
const Description = styled.p`
    margin-top: 32px;
    font-size: 24px;
    padding-right: 22px;

    @media ${theme.media.desktopLg} {
        padding-right: 0;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    margin-top: 32px;

    a + a {
        margin-left: 12px;
    }
`





