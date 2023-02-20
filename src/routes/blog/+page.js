import {BASE_URL, POSTS_API_URL} from '$lib/variables';
export async function load({params}) {
    const slug = params.slug;
    const httpResponse = await fetch(`${BASE_URL}${POSTS_API_URL}?_embed`)
    const posts = await httpResponse.json();
    posts.map((post) => {
        post.image = post._embedded["wp:featuredmedia"][0].source_url;
    });
    
    return {
        posts: posts
    };
}