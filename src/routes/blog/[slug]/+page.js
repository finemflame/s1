// http://wordpress-local:8888/wp-json/wp/v2/posts/10711?slug=test&_embed
import {BASE_URL, POSTS_API_URL} from '$lib/variables';
export async function load({params}) {
    const slug = params.slug;
    const httpResponse = await fetch(`${BASE_URL}${POSTS_API_URL}?slug=${slug}&_embed`)
    const posts = await httpResponse.json();
    
    const post = posts[0];
    post.image = post._embedded["wp:featuredmedia"][0].source_url;
    post.author = post._embedded.author[0].name;
    
    return {
        posts: posts
    };
}