import styled from 'styled-components';
import {theme} from '../../styles/Theme.ts';

export const Menu = () => {
    return (
        <StyledNav>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    ul {
        font-family: "Raleway", sans-serif;
        display: flex;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.5;
        color: ${theme.colors.primaryFont};
        
        li + li {
            margin-left: 48px;
        }
    }
    
`