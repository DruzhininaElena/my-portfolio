import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 0 120px;
    min-height: 100%;
    
    @media screen and (max-width: 1199px) {
        padding: 0 90px;
    }
    @media screen and (max-width: 991px) {
        padding: 0 60px;
    }
    @media screen and (max-width: 767px) {
        padding: 0 30px;
    }
    @media screen and (max-width: 575px) {
        padding: 0 15px;
    }
`