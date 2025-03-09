import styled from 'styled-components';

const Slide = styled.div`
    cursor: grab;
    &:active {
        cursor: grabbing;
        user-select: none;
    }
`

const TestimonyText = styled.p`
    padding: 0 30px;
    margin: 20px 0;
    font-size: 18px;
    text-align: center;
`
const TestimonyName = styled.span`
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    display: inline-block;
    width: 100%;
    text-align: center;
`
const TestimonyPhoto = styled.picture`
    img {
        width: 98px;
        height: 98px;
        border-radius: 50%;
        object-fit: cover;
        top: 0;
        margin: 0 auto;
    }
    
    //position: absolute;
    //top: -49px;
    //left: 50%;
    //transform: translateX(-50%);
`

export const S = {
    Slide,
    TestimonyText,
    TestimonyName,
    TestimonyPhoto
}