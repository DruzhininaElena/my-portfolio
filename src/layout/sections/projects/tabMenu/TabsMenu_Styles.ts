import styled from 'styled-components';
import {theme} from '../../../../styles/Theme.ts';

const StyledTabMenu = styled.nav`
   ul {
       display: flex;
       justify-content: space-between;
       max-width: 250px;
       margin: 0 auto 40px;
       text-transform: uppercase;
       font-weight: 600;
       font-size: 20px;
   }
`

const TabItem = styled.li``

const LinkTab = styled.a`
    transition: .1s ease-in-out;
    &.active, &:hover {
        color: ${theme.colors.accent};
    }
`

export const S = {
    StyledTabMenu,
    TabItem,
    LinkTab
}