import styled from 'styled-components';
import {theme} from '../../../styles/Theme.ts';

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href={'#main'}>About</a></li>
                <li><a href={'#projects'}>Projects</a></li>
                <li><a href={'#contacts'}>Contacts</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
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
    
    @media ${theme.media.tablet} {
        display: none;
    }
`