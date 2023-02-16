<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/api/posts.json");
    const posts = await res.json();

    return {
      props: {
        posts,
      },
    };
  };
</script>

<script>
  import { Col, Row } from 'sveltestrap';
  import FixedMenu from '$lib/components/FixedMenu.svelte';
  export let posts;
</script>

<Row>
  <Col>
    {#each posts as post}
    <h2>{@html post.title.rendered}</h2>
    <img src="{post.image}" alt="{post.title.rendered}">
    <p>{@html post.excerpt.rendered}</p>
    <a href={`/posts/${post.slug}`}>Read More</a>
  {/each}
  </Col>
</Row>
<FixedMenu></FixedMenu>