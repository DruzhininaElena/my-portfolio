import styled from 'styled-components';
import {theme} from '../../styles/Theme.ts';

const PopupMessageStyled = styled.div<{$bgColor?: string}>`
    position: fixed;
    top: 100px;
    right: 40px;
    padding: 10px;
    z-index: 500;
    background-color: ${props => props.$bgColor || 'rgba(101,253,138,0.5)'};
    border-radius: 10px;
    min-height: 20px;
    width: 200px;
    text-align: center;
    
    @media ${theme.media.tablet} {
        right: unset;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
    }
`

export const S = {
    PopupMessageStyled
}