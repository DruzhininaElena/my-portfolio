import styled from 'styled-components';
import {theme} from '../styles/Theme.ts';

type SectionTitlePropsType = {
    title: string
}

export const SectionTitle = ({title}: SectionTitlePropsType) => {
    return (
        <StyledSectionTitle>{title}</StyledSectionTitle>
    );
};

const StyledSectionTitle = styled.h2`
    font-weight: 700;
    font-size: 48px;
    line-height: 1.5;
    text-align: center;
    color: #25282b;
    font-family: "Playfair Display", sans-serif;
    position: relative;
    margin-bottom: 80px;

    &::after {
        content: '';
        position: absolute;
        display: block;
        margin: 0 auto;
        bottom: -4px;
        left: 50%;
        transform: translate(-50%);
        border-radius: 2px;
        width: 100px;
        height: 4px;
        background: ${theme.colors.accent};
    }
`
