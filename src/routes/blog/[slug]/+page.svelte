<script>
    export let data;
    import { Container, Icon, Image } from "sveltestrap";

    function convertToLocalTime(apiTime) {
        const date = new Date(apiTime);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const localTime = date.toLocaleDateString('de-DE', options);
            return localTime;
    }
</script>

<section class="main-content-lg">
    <Container>
        {#each data.posts as post}
        <article class="post post-xl post-{post.id} rounded-4 px-0 mb-1 overflow-hidden m-2">
            <!-- top section -->
            <div class="post-top px-3 mt-2 mb-5 col-lg-8 col-12 m-auto text-center">
                <h1 class="post-title mb-0 mt-2">
                    {@html post.title.rendered}
                </h1>
                <div class="meta list-inline mb-0">
                    <li class="list-inline-item mx-0 my-2">
                        <img src="{post._embedded.author[0].avatar_urls[24]}" class="author rounded-circle" alt="Article Author Avatar">
                        {post.author}
                    </li>
                    <li class="list-inline-item text-muted fs-6 fw-lighter px-2">{convertToLocalTime(post.date)}</li>
                    <!--
                    <li class="list-inline-item d-none">
                        <Icon name="bubble" /> (0)
                    </li>
                    -->
                </div>
                <p class="excerpt my-2 text-muted">{@html post.excerpt.rendered}</p>
            </div>
            <!-- thumbnail -->
            <div class="thumb">
                <!--
                <span class="badge bg-primary position-absolute d-none">
                    <a class="text-white" href="{post.category}">{post.categories[0]}</a>
                </span>
                -->
                <span class="post-format">
                    <Icon name="icon-picture" />
                </span>
                <a href={`/blog/${post.slug}`}>
                    <div class="inner">
                        {#if post.image}
                            <figure class="m-0 p-0 text-center">
                                <Image class="featured-image rounded-5" fluid alt="{post.title.rendered}" src="{post.image}" />
                            </figure>
                        {/if}
                    </div>
                </a>
            </div>
            <!-- details -->
            <div class="details mt-5 col-lg-8 col-12 m-auto">
                <p class="post-content">{@html post.content.rendered}</p>
            </div>
        </article>
        {/each}
    </Container>
</section>

<style lang="scss">
    article {
        .post-content {
            .wp-block-image {
                width: 100%;
                height: auto;
            }
        }
    }
</style>