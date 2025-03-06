import photo from '../../../assets/images/photoMy.webp';
import styled from 'styled-components';
import {theme} from '../../../styles/Theme.ts';

export const Photo = () => {
    return (
        <PhotoWrapper>
            <svg viewBox="0 0 720 629" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z"
                    fill="#FDC435"/>
                <pattern id="pattern" width="100%" height="100%" patternTransform="translate(110 320)">
                    <image width="90%" height="90%"
                           xlinkHref={photo}
                           preserveAspectRatio="xMidYMid meet">

                    </image>
                </pattern>
                <path
                    d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z"
                    fill="url(#pattern)"/>
            </svg>
        </PhotoWrapper>
    );
};

const PhotoWrapper = styled.div`
    width: 50%;

    @media ${theme.media.desktopLg} {
        width: 60%;
        align-self: flex-end;
    }

    @media ${theme.media.tablet} {
        width: 75%;
    }

    @media ${theme.media.mobile} {
        width: 100%;
    }
`