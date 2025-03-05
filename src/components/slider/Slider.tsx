import styled from 'styled-components';
import testimonyPhoto from '../../assets/images/testimony-photo.jpg'

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <TestimonyPhoto>
                    <img src={testimonyPhoto} alt={'user photo'}/>
                </TestimonyPhoto>
                <TestimonyText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </TestimonyText>
                <TestimonyName>
                    @Karmani
                </TestimonyName>
            </Slide>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    
`

const Slide = styled.div`
    
`
const TestimonyText = styled.p`
    padding: 0 30px;
    margin-bottom: 20px;
    font-size: 18px;
`
const TestimonyName = styled.span`
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
`
const TestimonyPhoto = styled.div`
    img {
        width: 98px;
        height: 98px;
        border-radius: 50%;
        object-fit: cover;
        top: 0
    }
    
    position: absolute;
    top: -49px;
    left: 50%;
    transform: translateX(-50%);
`
