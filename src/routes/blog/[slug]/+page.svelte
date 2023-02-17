<script>
    export let data;
    import { Container, Icon, NavLink } from "sveltestrap";
</script>

<section class="main-content-lg">
    <Container>
        {#each data.posts as post }
            <div class="post post-xl">
                <!-- top section -->
                <div class="post-top">
                    <div class="meta list-inline mb-0">
                        <li class="list-inline-item">
                            <NavLink href="#">
                                <img src="{post.media}" class="author" alt="author">{post.author}
                            </NavLink>
                        </li>
                        <li class="list-inline-item">{post.date}</li>
                        <li class="list-inline-item">
                            <Icon name="bubble" /> (0)</li>
                    </div>
                    <h5 class="post-title mb-0 mt-4">
                        <NavLink href="blog-single.html">
                            {@html post.excerpt.rendered}
                        </NavLink>
                    </h5>
                </div>
                <!-- thumbnail -->
                <div class="thumb rounded">
                    <a href="category.html" class="category-badge lg position-absolute">{post.category}</a>
                    <span class="post-format">
                        <Icon name="icon-picture" />
                    </span>
                    <a href="blog-single.html">
                        <div class="inner">
                            <img src="images/posts/post-xl-1.jpg" alt="post-title">
                        </div>
                    </a>
                </div>
                <!-- details -->
                <div class="details">
                    <p class="excerpt mb-0">{data.post}</p>
                </div>
                <div class="post-bottom clearfix d-flex align-items-center">
                    <div class="social-share me-auto">
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
                    </div>
                    <div class="float-end d-none d-md-block">
                        <NavLink href="{post.link}" class="more-link">Weiterlesen...<Icon name="arrow-right" /></NavLink>
                    </div>
                    <div class="more-button d-block d-md-none float-end">
                        <NavLink href="blog-single.html">
                            <Icon name="options" />
                        </NavLink>
                    </div>
                </div>
            </div>
        {/each}
        <!-- pagination -->
        <nav>
            <ul class="pagination justify-content-center">
                <li class="page-item active" aria-current="page">
                    <span class="page-link">1</span>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul>
        </nav>
    </Container>
</section>