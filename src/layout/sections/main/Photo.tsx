import photo from '../../../assets/images/photoMy.webp';
import styled from 'styled-components';

export const Photo = () => {
    return (
        <PhotoWrapper>
            <svg width="777" height="877" viewBox="0 0 777 877" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <defs/>
                <path
                    d="M426.75 0.66C526.01 5.37 630.41 42.26 691.01 119.05C747.05 190.06 709.4 290.88 725.4 379.11C738.27 450.04 786.3 512.96 775.4 584.2C763.33 663.13 724.84 738.45 662.53 790.18C597.27 844.36 510.83 889.89 426.75 873.67C345.26 857.94 319.87 754.82 250.24 710.63C174.06 662.28 41.25 688.78 6.43 606.91C-27.69 526.71 83.95 456.25 106.3 372.2C131.06 279.1 79.6 166.63 143.09 93.02C208.86 16.76 324.68 -4.19 426.75 0.66Z"
                    fill="#FDC435"/>
                <pattern id="pattern" width="100%" height="100%" patternTransform="translate(180 310)">
                    <image width="65%" height="65%"

                           xlinkHref={photo}
                           preserveAspectRatio="xMidYMin slice">

                    </image>
                </pattern>
                <path
                    d="M426.75 0.66C526.01 5.37 630.41 42.26 691.01 119.05C747.05 190.06 709.4 290.88 725.4 379.11C738.27 450.04 786.3 512.96 775.4 584.2C763.33 663.13 724.84 738.45 662.53 790.18C597.27 844.36 510.83 889.89 426.75 873.67C345.26 857.94 319.87 754.82 250.24 710.63C174.06 662.28 41.25 688.78 6.43 606.91C-27.69 526.71 83.95 456.25 106.3 372.2C131.06 279.1 79.6 166.63 143.09 93.02C208.86 16.76 324.68 -4.19 426.75 0.66Z"
                    fill="url(#pattern)"/>
            </svg>
        </PhotoWrapper>
    );
};

const PhotoWrapper = styled.div`
    //max-width: 100%;
    position: absolute;
    right: -57px;
    top: -328px;
    z-index: -1;
    overflow: hidden;
    
    //@media screen and (max-width: 768px)  {
    //    position: relative;
    //    max-width: 100%;
    //}
`