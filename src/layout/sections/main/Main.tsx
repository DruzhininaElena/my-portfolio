import photo from '../../../assets/images/photo.webp'
import background from '../../../assets/images/yellow-bg.png'
import backgroundSvg from '../../../assets/images/yellow-bg.svg'
import styled from 'styled-components';
import {Button} from '../../../components/UI/button/Button.tsx';
import {theme} from '../../../styles/Theme.ts';

export const Main = () => {
    return (
        <StyledMain >
            <ContentWrapper className={'container'}>
                <MainTitle>Frontend Developer</MainTitle>
                <MainHelloTitle>Hello, my name is Elena Druzhinina</MainHelloTitle>
                <MainDescription>
                    Short text with details about you, what you do or your professional career. You can add more
                    information on the about page.
                </MainDescription>
                <ButtonWrapper>
                    <Button>Projects</Button>
                    <Button outlined>LinkedIn</Button>
                </ButtonWrapper>
            </ContentWrapper>
            <PhotoWrapper>
                <img src={backgroundSvg}/>
                <Photo>
                    <img src={photo} alt="my-photo"/>
                </Photo>
            </PhotoWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: calc(100vh - 80px);
    display: flex;
`
const ContentWrapper = styled.div`
    max-width: 50%;
    margin-top: 55px;
    padding-right: 92px;
`
const MainTitle = styled.h1`
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: ${theme.colors.accent};
`

const MainHelloTitle = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 63px;
    line-height: 1.2;
`
const MainDescription = styled.p`
    margin-top: 32px;
    padding-right: 22px;
    font-size: 24px;
    line-height: 1.5;
    color: ${theme.colors.secondaryFont};
`

const ButtonWrapper = styled.div`
    display: flex;
    margin-top: 32px;
    button + button {
        margin-left: 12px;
    }
`

const PhotoWrapper = styled.div`
    // background-image: url(${background});
    // background-size: contain;
    // background-repeat: no-repeat;
    max-width: 50%;
    position: relative;
    top: -328px;
    right: -57px;
    z-index: -50;

    img {
        width: 100%;
        object-fit: cover;
        
    }
`
const Photo = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
`


