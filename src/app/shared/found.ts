import { Comment } from './comment';

export class Found {
    id: number;
    name: string;
    image: string;
    category: string;
    blood: string;
    height: string;
    featured: boolean;
    marks:string;
    information: string;
    comments: Comment[];
}