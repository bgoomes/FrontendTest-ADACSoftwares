import avatar1 from '../assets/avatar2.png';
import avatar2 from '../assets/avatar3.png';
import avatar3 from '../assets/avatar4.png';
import avatar4 from '../assets/avatar5.png';

export type CardProps = {
    id: number;
    src: string;
    alt: string;
    name: string;
    role: string;
    description: string;
}

export const avatar: CardProps[] = [
    {id: 1, src: avatar1, alt: 'Avatar 1', name: 'Claire Bell', role: 'Designer', description: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.'},
    {id: 2, src: avatar2, alt: 'Avatar 2', name: 'Francisco Lane', role: 'Designer', description: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.'},
    {id: 3, src: avatar3, alt: 'Avatar 3', name: 'Ralph Fisher', role: 'Designer', description: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.'},
    {id: 4, src: avatar4, alt: 'Avatar 4', name: 'Jorge Murphy', role: 'Designer', description: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.'},
]