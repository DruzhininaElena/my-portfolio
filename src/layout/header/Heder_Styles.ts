import styled, {css} from 'styled-components';
import {Container} from '../../components/container/Container.ts';
import {FlexWrapper} from '../../components/FlexWrapper.ts'

const Header = styled.header<{$isPageScrolled: boolean}>`
    ${FlexWrapper} {
        padding: 12px 0;
    }
    //position: absolute;
    //z-index: 10;
    //top: 0;
    //left: 0;
    //right: 0;
    
    position: sticky;
    top: 0;
    z-index: 10;

    ${props => props.$isPageScrolled && css<{$isPageScrolled: boolean}>`
        background-color: rgba(37, 40, 43, 0.25)
    `}

    // ${Container} {
    //     position: relative;
    // }
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