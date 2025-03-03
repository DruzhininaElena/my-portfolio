import styled from 'styled-components';

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <TestimonalText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</TestimonalText>
                <TestimonalName>
                    @ivan ivanow
                </TestimonalName>
            </Slide>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    
`

const Slide = styled.div`
    
`
const TestimonalText = styled.p`
    padding: 0 30px;
    margin-bottom: 20px;
    font-size: 18px;
`
const TestimonalName = styled.span`
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
`
