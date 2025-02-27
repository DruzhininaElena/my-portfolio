import styled from 'styled-components';
import {Icon} from './icon/Icon.tsx';
import {FlexWrapper} from './FlexWrapper.tsx';


export const Social = () => {
    return (
        <StyledSocial>
            <FlexWrapper justify={'space-around'}>
                <Icon iconId={'telegram'} height={'40'} width={'40'} viewBox={'3 2 18 18'}/>
                <Icon iconId={'whatsapp'} height={'40'} width={'40'} viewBox={'-2 -2 23 23'}/>
                <Icon iconId={'email'} height={'40'} width={'40'} viewBox={'-2 -8 45 45'}/>
            </FlexWrapper>
        </StyledSocial>
    );
};

const StyledSocial = styled.div`
    margin: 0 auto;
    max-width: 200px;
`

