import styled from 'styled-components';
import {Social} from '../../components/Social.tsx';

export const Footer = () => {
    return (
        <StyledFooter>
            <Social/>
            <Copyright>Madelyn Torff 2021 </Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #ebf6ff;
    min-height: 25vh;
`
const Copyright = styled.div`
    text-align: center;
`