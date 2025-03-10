import photo from '../../../../assets/images/photoMy.webp';
import {S} from './Photo_Styles.ts';
import React, {useState} from 'react';

export const Photo: React.FC = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <>
            {width > breakpoint ? <S.PhotoWrapper>
                <svg viewBox="0 0 777 877" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M426.75 0.66C526.01 5.37 630.41 42.26 691.01 119.05C747.05 190.06 709.4 290.88 725.4 379.11C738.27 450.04 786.3 512.96 775.4 584.2C763.33 663.13 724.84 738.45 662.53 790.18C597.27 844.36 510.83 889.89 426.75 873.67C345.26 857.94 319.87 754.82 250.24 710.63C174.06 662.28 41.25 688.78 6.43 606.91C-27.69 526.71 83.95 456.25 106.3 372.2C131.06 279.1 79.6 166.63 143.09 93.02C208.86 16.76 324.68 -4.19 426.75 0.66Z"
                        fill="#FDC435"/>
                    <pattern id="pattern" width="100%" height="100%" patternTransform="translate(200 360)">
                        <image width="60%" height="60%"
                               xlinkHref={photo}
                               preserveAspectRatio="xMidYMid meet">

                        </image>
                    </pattern>
                    <path
                        d="M426.75 0.66C526.01 5.37 630.41 42.26 691.01 119.05C747.05 190.06 709.4 290.88 725.4 379.11C738.27 450.04 786.3 512.96 775.4 584.2C763.33 663.13 724.84 738.45 662.53 790.18C597.27 844.36 510.83 889.89 426.75 873.67C345.26 857.94 319.87 754.82 250.24 710.63C174.06 662.28 41.25 688.78 6.43 606.91C-27.69 526.71 83.95 456.25 106.3 372.2C131.06 279.1 79.6 166.63 143.09 93.02C208.86 16.76 324.68 -4.19 426.75 0.66Z"
                        fill="url(#pattern)"/>
                </svg>
            </S.PhotoWrapper> :
                <S.PhotoWrapper>
                    <svg viewBox="0 0 720 629" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z"
                            fill="#FDC435"/>
                        <pattern id="pattern" width="100%" height="100%" patternTransform="translate(200 360)">
                            <image width="85%" height="85%"
                                   xlinkHref={photo}
                                   preserveAspectRatio="xMidYMid meet">

                            </image>
                        </pattern>
                        <path
                            d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z"
                            fill="url(#pattern)"/>
                    </svg>
                </S.PhotoWrapper>
            }
        </>

    );
};