import styled from 'styled-components';
import {theme} from '../../../styles/Theme.ts';

export const MenuDesktop = () => {

    return (
        <StyledMenuDesktop>
            <MenuList>
                <MenuItem><a href={'#main'}>About</a></MenuItem>
                <MenuItem><a href={'#projects'}>Projects</a></MenuItem>
                <MenuItem><a href={'#contacts'}>Contacts</a></MenuItem>
            </MenuList>
        </StyledMenuDesktop>
    );
};

const StyledMenuDesktop = styled.nav`
    
    @media ${theme.media.tablet} {
        display: none;
    }
`

const MenuList = styled.ul`
    font-family: "Raleway", sans-serif;
    display: flex;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: ${theme.colors.primaryFont};
`

const MenuItem = styled.li`
    & + li {
        margin-left: 48px;
    }
`