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
    imageSrcWebp: string;
    type: string

}
export const projectsData: projectDataType[] = [
    {
        id: 1,
        title: 'Project Name1',
        description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
        imageSrc: imageProject1,
        imageSrcWebp: imageProject1Webp,
        type: 'vue'
    },
    {
        id: 2,
        title: 'Project Name2',
        description: 'What was your role, your deliverables, if the project was personal, freelancing.',
        imageSrc: imageProject2,
        imageSrcWebp: imageProject2Webp,
        type: 'vue'
    },
    {
        id: 3,
        title: 'Project Name3',
        description: 'You can also add in this description the type of the project, if it was for web, mobile, electron.',
        imageSrc: imageProject3,
        imageSrcWebp: imageProject3Webp,
        type: 'react'
    },
    {
        id: 4,
        title: 'Project Name1',
        description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
        imageSrc: imageProject1,
        imageSrcWebp: imageProject1Webp,
        type: 'react'
    },
    {
        id: 5,
        title: 'Project Name2',
        description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
        imageSrc: imageProject2,
        imageSrcWebp: imageProject2Webp,
        type: 'vue'
    },
    {
        id: 6,
        title: 'Project Name3',
        description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
        imageSrc: imageProject3,
        imageSrcWebp: imageProject3Webp,
        type: 'react'
    }
]

export type tabStatusType = 'all' | 'vue' | 'react'

export type tabItemsType = {
    id: number;
    title: string;
    status: tabStatusType

}

export const tabItems: tabItemsType[] = [
    {
        id: 1,
        title: 'All',
        status: 'all'
    },
    {
        id: 2,
        title: 'React',
        status: 'react'
    },
    {
        id: 3,
        title: 'Vue',
        status: 'vue'
    }
]