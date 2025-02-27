import styled from 'styled-components';

type SectionTitlePropsType = {
    children: string
}

export const SectionTitle = ({children}: SectionTitlePropsType) => {
    return (
        <div>
            <StyledSectionTitle>{children}</StyledSectionTitle>
            <TitleUnderline/>
        </div>
    );
};

const StyledSectionTitle = styled.h2`
    font-weight: 700;
    font-size: 48px;
    line-height: 1.5;
    text-align: center;
    color: #25282b;
    font-family: "Playfair Display", sans-serif;
    position: relative;
    
`
const TitleUnderline = styled.div`
    border-radius: 2px;
    width: 100px;
    height: 4px;
    background: #fdc435;
    margin: 4px auto 0 auto;
`
