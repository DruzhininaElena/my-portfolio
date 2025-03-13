import styled, {css} from 'styled-components';
import {theme} from '../../../styles/Theme.ts';

type ButtonPropsType = {
    $outlined?: boolean
}

export const LinkBtn = styled.a<ButtonPropsType>`
    font-family: "Roboto", sans-serif;
    border-radius: 8px;
    display: inline-block;
    background-color: ${theme.colors.accent};
    padding: 8px 24px;
    height: 43px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    white-space: nowrap;
    transition: all .1s ease-in-out;
    
    @media screen and (max-width: 768px) {
        &:hover {
            background-color: rgba(253, 196, 53, 0.8);
        }
    }

    ${props => props.$outlined && css<ButtonPropsType>`
        border: 2px solid ${theme.colors.primaryFont};
        background-color: transparent;
        padding-top: 6px;
    `}

`