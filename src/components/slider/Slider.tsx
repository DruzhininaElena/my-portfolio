import styled from 'styled-components';

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <span>
                    @ivan ivanow
                </span>
            </Slide>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
    border: 2px solid #FDC435;
`

const Slide = styled.div`
    
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #FDC435;
        border-radius: 50%;
        margin: 5px;
    }
`
