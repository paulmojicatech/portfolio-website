import { Handlers } from '$fresh/server.ts';

export interface Blog {
    id: number;
    title: string;
    description: string;
    createdDate: Date;
    url: string;
    socialImage: string;
}