import styled from 'styled-components';
import {theme} from '../../styles/Theme.ts';

const PopupMessageStyled = styled.div<{$bgColor?: string, $color?: string}>`
    position: fixed;
    bottom: 80px;
    right: 80px;
    padding: 10px 10px 10px 50px;
    z-index: 500;
    background-color: ${props => props.$bgColor || '#ddffe7'};
    border-radius: 5px;
    width: 300px;
    color: ${props => props.$color || '#047804'};
    box-shadow: 0 5px 5px 0 rgba(11, 9, 9, 0.1);
    cursor: pointer;
   
    
    &::before {
        content: '';
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: ${props => props.$color || '#047804'};
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
    }

    @media ${theme.media.tablet} {
        bottom: 15px;
        right: 50%;
        transform: translateX(50%);
        
    }
`

const MessageIcon = styled.div`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
`

const Response = styled.h3<{$color?: string}>`
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    
    &::before, &::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 12px;
        border-radius: 2px;
        background-color: ${props => props.$color || '#047804'};
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
    
    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }
`

const Text = styled.p`
    color: inherit;
    font-size: 14px;
`

export const S = {
    PopupMessageStyled,
    MessageIcon,
    Response,
    Text
}