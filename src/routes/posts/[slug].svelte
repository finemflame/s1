<script context="module">
  export const load = async ({ page, fetch }) => {
    const slug = page.params.slug;
    const res = await fetch(`/api/posts/${slug}.json`);
    const post = await res.json();

    return {
      props: {
        post,
      },
    };
  };
</script>

<script>
  import { Styles } from 'sveltestrap';
  import { Col, Row } from 'sveltestrap';
  export let post;
</script>

<Row>
  <h1>{@html post.title.rendered}</h1>
  <Col>
    <p><small>{new Date(post.date)}</small></p>
    <p><b>by {post.author}</b></p>
    {#if post.image}
      <img src={post.image} alt={post.title.rendered} />
    {/if}
    <p>{@html post.content.rendered}</p>
  </Col>
</Row>

<Styles />