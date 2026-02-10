import airbnb from '../assets/airbnb.svg';
import android from '../assets/android.svg';
import apiary from '../assets/apiary.svg';
import apple from '../assets/apple.svg';
import basecamp from '../assets/basecamp.svg';
import ibm from '../assets/ibm.svg';
import retangulo1 from '../assets/Rectangle1.png'
import retangulo2 from '../assets/Rectangle2.png'
import retangulo3 from '../assets/Rectangle3.png'
import retangulo4 from '../assets/Rectangle4.png'
import retangulo5 from '../assets/Rectangle5.png'
import retangulo6 from '../assets/Rectangle6.png'
import retangulo7 from '../assets/Rectangle7.png'


export type GalleryItem = {
    id: number;
    src: string;
    alt?: string;
};

export const gallery: GalleryItem[] = [
    { id: 1, src: apple, alt: 'Apple' },
    { id: 2, src: apiary, alt: 'Apiary' },
    { id: 3, src: android, alt: 'Android' },
    { id: 4, src: basecamp, alt: 'Basecamp' },
    { id: 5, src: airbnb, alt: 'Airbnb' },
    { id: 6, src: ibm, alt: 'IBM' },
];

export const rectangleGallery: GalleryItem[] = [
    { id: 7, src: retangulo1, alt: 'Retangulo 1' },
    { id: 8, src: retangulo2, alt: 'Retangulo 2' },
    { id: 9, src: retangulo3, alt: 'Retangulo 3' },
    { id: 10, src: retangulo4, alt: 'Retangulo 4' },
    { id: 11, src: retangulo5, alt: 'Retangulo 5' },
    { id: 12, src: retangulo6, alt: 'Retangulo 6' },
    { id: 12, src: retangulo7, alt: 'Retangulo 7' },
]
