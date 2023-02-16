import {BASE_URL, MENU_URL} from '$lib/variables';
export async function load() {
    const httpResponse = await fetch(`${BASE_URL}${MENU_URL}?${Date.now()}`)
    const json = await httpResponse.json();
    return {
        items: json
    };
}