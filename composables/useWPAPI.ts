import { type Post } from '@/types/post'

export default () => {

    // อ่าน config จากไฟล์ .env
    const config = useRuntimeConfig()

    const WP_URL = config.public.wpUrlAPI

    // กำหนด useFetch ในการอ่าน API
    const get = async<T>(endpoint: string) => {
        return useFetch<T>(`${WP_URL}/wp-json/wp/v2/${endpoint}`)
    }

    // อ่านข้อมูล Post ทั้งหมด จาก API โดยใช้ get
    // Get All Posts
    const getPosts = async (
        category?: number,
        page: number = 1,
        perPage: number = 10,
    ) => {
        let query: string = `posts?page=${page}&per_page=${perPage}&_embed=1`
        if (category) {
            query += `&categories=${category}`
        }
        return get<Post[]>(query)
    }

    // อ่านข้อมูล Post รายการเดียว จาก API โดยใช้ get
    // Get Single Post
    const getPost = async (slug: string) => {
        return get<Post[]>(`posts?slug=${slug}&_embed=1`)
    }

    // อ่านข้อมูลหมวดหมู่ทั้งหมด จาก API โดยใช้ get
    // Get Categories
    const getCategories = async (fields: string = "name,slug,count") => {
        return get<any>(`categories`);
    }

    // อ่านบทความจากหมวดหมู่ที่เลือก จาก API โดยใช้ get
    // Get Single Category
    const getCategory = async (slug: string) => {
        return get<any>(`categories?slug=${slug}`);
    }

    return { getPosts, getPost, getCategories, getCategory }
}

