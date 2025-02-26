import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import photo from '../../../assets/images/photo.webp'
import background from '../../../assets/images/yellow-bg.png'
import styled from 'styled-components';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper>
                <div>
                    <h1>Software Developer</h1>
                    <h2>Hello, my name is Vahid Navazan</h2>
                    <p>Short text with details about you, what you do or your professional career. You can add more
                        information on the about page.</p>
                    <div>
                        <button>Projects</button>
                        <button>LinkedIn</button>
                    </div>
                </div>
                <PhotoStyled>
                <img src={photo} alt="my-photo"/>
                </PhotoStyled>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    background-color: #f3f3e0;
    min-height: 100vh;
`

const PhotoStyled = styled.div`
    width: 50%;
     background-image: url(${background});
     background-size: cover;
     background-repeat: no-repeat;
`


