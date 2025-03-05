import styled, {css} from 'styled-components';
import {theme} from '../../../styles/Theme.ts';

type ButtonPropsType = {
    outlined?: boolean
}

export const Button = styled.a<ButtonPropsType>`
    border-radius: 8px;
    background-color: ${theme.colors.accent};
    padding: 8px 24px;
    height: 43px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    
    &:hover {
        opacity: 0.8;
    }
    
    ${props=> props.outlined && css<ButtonPropsType>`
        border: 2px solid ${theme.colors.primaryFont};
        background-color: transparent;
        padding-top: 6px;
    `}
    
`