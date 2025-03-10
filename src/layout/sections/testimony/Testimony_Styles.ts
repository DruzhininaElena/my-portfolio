import {theme} from '../../../styles/Theme.ts';
import styled from 'styled-components';

const SliderWrapper = styled.div`
    background-color: ${theme.colors.secondaryBg};
    border-radius: 24px;
    max-width: 650px;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 49px 0 40px;

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


export const S = {
    SliderWrapper,
    IconWrapper
}