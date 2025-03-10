import styled, {css} from 'styled-components';
import {FlexWrapper} from '../../components/FlexWrapper.ts'

const Header = styled.header<{$isPageScrolled: boolean}>`
    ${FlexWrapper} {
        padding: 12px 0;
    }
    
    position: sticky;
    top: 0;
    z-index: 10;

    ${props => props.$isPageScrolled && css<{$isPageScrolled: boolean}>`
        background-color: rgba(255, 255, 255, 0.75)
    `}
`

// const ThemeIcon = styled.div`
//     position: absolute;
//     top: 20px;
//     right: 20px;
//     cursor: pointer;
// `

export const S = {
    Header,
    // ThemeIcon
}