import imageProject1 from '../../../assets/images/projects/project1.jpeg';
import imageProject2 from '../../../assets/images/projects/project2.jpeg';
import imageProject3 from '../../../assets/images/projects/project3.jpeg';

type projectDataType = {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    directionContent?: string

}
export const projectsData: projectDataType[] = [
    {
        id: 1,
        title: 'Project Name1',
        description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
        imageSrc: imageProject1
    },
    {
        id: 2,
        title: 'Project Name2',
        description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
        imageSrc: imageProject2,
        directionContent: 'row-reverse'
    },
    {
        id: 3,
        title: 'Project Name3',
        description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
        imageSrc: imageProject3
    }
]