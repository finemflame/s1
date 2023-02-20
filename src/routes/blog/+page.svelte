<script content="module">
    export let data;
    import { Container, Image, Icon, NavLink, Row } from "sveltestrap";
    import Masonry from "../../lib/components/Masonry.svelte";

    function convertToLocalTime(apiTime) {
    const date = new Date(apiTime);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const localTime = date.toLocaleDateString('de-DE', options);
        return localTime;
    }

    let itemCount = 2
</script>

<section class="main-content-lg">
    <Container class="p-0">
        <Row>
            <Masonry stretchFirst={false} gridGap={'2rem'} colWidth={'minmax(Min(20em, 100%), 1fr)'} items={data.posts.slice(0,itemCount)} >
                {#each data.posts as post}
                <div class="col">
                    <article class="post rounded-4 overflow-hidden">
                        <!--post-xl-->
                        <!-- thumbnail -->
                        <div class="thumb">
                            <!--
                            <a href={post.category} class="category-badge lg position-absolute d-none">{post.categories[0]}</a>
                            <span class="post-format">
                                <Icon name="icon-picture" />
                            </span>
                            -->
                            <a href={`/blog/${post.slug}`}>
                                <div class="inner">
                                    {#if post.image}
                                        <figure class="m-0 p-0">
                                            <Image class="featured-image" fluid alt="{post.title.rendered}" src="{post.image}" />
                                        </figure>
                                    {/if}
                                </div>
                            </a>
                        </div>
                        <!-- top section -->
                        <div class="post-top px-3 mt-2 mb-1">
                            <div class="meta list-inline mb-0">
                                <li class="list-inline-item mx-0 my-2">
                                    <img src="{post._embedded.author[0].avatar_urls[24]}" class="author rounded-circle" alt="Article Author Avatar">
                                    {post.author}
                                </li>
                                <li class="list-inline-item text-muted fs-6 fw-lighter px-2">{convertToLocalTime(post.date)}</li>
                                <li class="list-inline-item d-none">
                                    <Icon name="bubble" /> (0)
                                </li>
                            </div>
                            <h4 class="post-title mb-0 mt-2">
                                <NavLink href="blog-single.html">
                                    {@html post.title.rendered}
                                </NavLink>
                            </h4>
                        </div>
                        <!-- details -->
                        <div class="details px-3">
                            <p class="excerpt mb-0 text-muted">{@html post.excerpt.rendered}</p>
                        </div>
                        <div class="post-bottom clearfix d-flex align-items-center mb-3">
                            <!--<div class="social-share me-auto">
                                <button class="toggle-button icon-share"></button>
                                <ul class="icons list-unstyled list-inline mb-0">
                                    <li class="list-inline-item">
                                        <NavLink href="#">
                                            <Icon name="facebook" />
                                        </NavLink>
                                    </li>
                                    <li class="list-inline-item">
                                        <NavLink href="#">
                                            <Icon name="twitter" />
                                        </NavLink>
                                    </li>
                                    <li class="list-inline-item">
                                        <NavLink href="#">
                                            <Icon name="linkedin" />
                                        </NavLink>
                                    </li>
                                    <li class="list-inline-item">
                                        <NavLink href="#">
                                            <Icon name="pinterest" />
                                        </NavLink>
                                    </li>
                                    <li class="list-inline-item">
                                        <NavLink href="#">
                                            <Icon name="telegram" />
                                        </NavLink>
                                    </li>
                                    <li class="list-inline-item">
                                        <NavLink href="#">
                                            <Icon name="envelope" />
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>-->
                            <div class="float-end d-none d-md-block px-3">
                                <NavLink href={`/blog/${post.slug}`} class="more-link">Weiterlesen...<Icon name="arrow-right" /></NavLink>
                            </div>
                            <div class="more-button d-block d-md-none float-end">
                                <NavLink href="blog-single.html">
                                    <Icon name="options" />
                                </NavLink>
                            </div>
                        </div>
                    </article>
                </div>
                {/each}
              </Masonry>
        </Row>

        <!-- pagination
        <nav>
            <ul class="pagination justify-content-center">
                <li class="page-item active" aria-current="page">
                    <span class="page-link">1</span>
                </li>
            </ul>
        </nav> -->
    </Container>
</section>

<style lang="text/scss">
    article {
        box-shadow: 0px 7px 15px 0px rgb(0 0 0 / 7%);
    }
</style>