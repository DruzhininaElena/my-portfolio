import userPhoto1 from '../../../assets/images/testimony/user-photo-1.jpg'
import userPhotoWebp1 from '../../../assets/images/testimony/user-photo-1.webp'
import userPhoto2 from '../../../assets/images/testimony/user-photo-2.jpg'
import userPhotoWebp2 from '../../../assets/images/testimony/user-photo-2.webp'
import userPhoto3 from '../../../assets/images/testimony/user-photo-3.jpg'
import userPhotoWebp3 from '../../../assets/images/testimony/user-photo-3.webp'

type testimonyDataType = {
    id: number;
    userPhotoSrc: string;
    userPhotoSrcWebp: string;
    text: string;
    userName: string
}
export const testimonyData: testimonyDataType[] = [
    {
        id: 1,
        userPhotoSrc: userPhoto1,
        userPhotoSrcWebp: userPhotoWebp1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        userName: 'Karmani'
    },
    {
        id: 2,
        userPhotoSrc: userPhoto2,
        userPhotoSrcWebp: userPhotoWebp2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        userName: 'Ivan'
    },
    {
        id: 3,
        userPhotoSrc: userPhoto3,
        userPhotoSrcWebp: userPhotoWebp3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        userName: 'Aleksey'
    },

]