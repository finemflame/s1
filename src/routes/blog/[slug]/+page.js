import {BASE_URL, POSTS_API_URL} from '$lib/variables';
export async function load() {
    const httpResponse = await fetch(`${BASE_URL}${POSTS_API_URL}`)
    const json = await httpResponse.json();
    console.log(json);
    return {
        posts: json
    };
}