import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/slider.css'
import {S} from './Slider_Styles.ts';
import {testimonyData} from '../../layout/sections/testimony/testimonyData.ts';


type SlidePropsType = {
    userPhotoSrc: string;
    userPhotoSrcWebp: string;
    text: string;
    userName: string
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.TestimonyPhoto>
                <source srcSet={props.userPhotoSrcWebp} type={'image/webp'}/>
                <img src={props.userPhotoSrc} alt="user photo"/>
            </S.TestimonyPhoto>
            <S.TestimonyText>{props.text}</S.TestimonyText>
            <S.TestimonyName>@{props.userName}</S.TestimonyName>
        </S.Slide>
    )
}

const [review1, review2, review3] = testimonyData

const items = [
    <Slide userPhotoSrc={review1.userPhotoSrc}
           userPhotoSrcWebp={review1.userPhotoSrcWebp}
           text={review1.text}
           userName={review1.userName}
    />,
    <Slide userPhotoSrc={review2.userPhotoSrc}
           userPhotoSrcWebp={review2.userPhotoSrcWebp}
           text={review2.text}
           userName={review2.userName}
    />,
    <Slide userPhotoSrc={review3.userPhotoSrc}
           userPhotoSrcWebp={review3.userPhotoSrcWebp}
           text={review3.text}
           userName={testimonyData[2].userName}
    />


    // testimonyData.map(el => <Slide key={el.id} {...el}/>)

];

export const Slider = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
    />
);

