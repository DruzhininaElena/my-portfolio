import styled from 'styled-components';
import {Social} from '../../components/Social.tsx';
import {FlexWrapper} from '../../components/FlexWrapper.tsx';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Social/>
                <Copyright>Madelyn Torff 2021 </Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #ebf6ff;
    min-height: 25vh;
`
const Copyright = styled.small`
    text-align: center;
`