import styled from 'styled-components';
import {Icon} from './icon/Icon.tsx';


export const Social = () => {
    return (
        <StyledSocial>
            <ul>
                <li><a href="#"><Icon iconId={'telegram'} height={'40'} width={'40'} viewBox={'3 2 18 18'}/></a></li>
                <li><a href="#"><Icon iconId={'whatsapp'} height={'40'} width={'40'} viewBox={'-2 -2 23 23'}/></a></li>
                <li><a href="#"><Icon iconId={'email'} height={'40'} width={'40'} viewBox={'-2 -8 45 45'}/></a></li>
            </ul>
        </StyledSocial>
    );
};

const StyledSocial = styled.div`
    margin: 0 auto;
    max-width: 200px;
    ul {
        display: flex;
        justify-content: space-around;
    }
`

