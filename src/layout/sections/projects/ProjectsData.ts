import imageProject1 from '../../../assets/images/projects/project1.jpeg';
import imageProject2 from '../../../assets/images/projects/project2.jpeg';
import imageProject3 from '../../../assets/images/projects/project3.jpeg';
import imageProject1Webp from '../../../assets/images/projects/project1.webp';
import imageProject2Webp from '../../../assets/images/projects/project2.webp';
import imageProject3Webp from '../../../assets/images/projects/project3.webp';

type projectDataType = {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    imageSrcWebp: string

}
export const projectsData: projectDataType[] = [
    {
        id: 1,
        title: 'Project Name1',
        description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
        imageSrc: imageProject1,
        imageSrcWebp: imageProject1Webp
    },
    {
        id: 2,
        title: 'Project Name2',
        description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
        imageSrc: imageProject2,
        imageSrcWebp: imageProject2Webp
    },
    {
        id: 3,
        title: 'Project Name3',
        description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
        imageSrc: imageProject3,
        imageSrcWebp: imageProject3Webp
    },
    {
        id: 4,
        title: 'Project Name1',
        description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
        imageSrc: imageProject1,
        imageSrcWebp: imageProject1Webp
    },
    {
        id: 5,
        title: 'Project Name2',
        description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
        imageSrc: imageProject2,
        imageSrcWebp: imageProject2Webp
    },
    {
        id: 6,
        title: 'Project Name3',
        description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
        imageSrc: imageProject3,
        imageSrcWebp: imageProject3Webp
    }
]