export type Post = {
    id: number;
    title: {
        rendered: string;
    };
    slug: string;
    excerpt: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    date: string;
    link: string;
    author: number;
    _embedded: any;
}