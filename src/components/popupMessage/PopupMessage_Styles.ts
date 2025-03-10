import styled from 'styled-components';

const PopupMessageStyled = styled.div<{$bgColor?: string}>`
    position: fixed;
    bottom: 40px;
    right: 40px;
    padding: 10px;
    z-index: 500;
    background-color: ${props => props.$bgColor || '#c3fbcf'};
    border-radius: 10px;
    min-height: 20px;
    width: 200px;
`

export const S = {
    PopupMessageStyled
}