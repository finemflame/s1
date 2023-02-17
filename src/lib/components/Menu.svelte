<script>
    import { Container, Icon, Nav } from 'sveltestrap';
    import { fly } from 'svelte/transition';
    import { elasticIn, elasticOut } from 'svelte/easing';
    export let menuItems = [];

</script>

<nav class="px-3 py-3">
    <Container>
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
          <div role="img" aria-label="Logo">
            <img width="60" src="https://chooomedia.de/wp-content/uploads/2020/07/logo-chooomedia-2020-315-315.png" alt="Logo"/>
          </div>
        </a>

        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            {#each menuItems as item}
            <li>
                <a href={item.url} class="nav-link text-black" in:fly="{{y: -5, duration: 380, delay: 100, elasticIn}}">
                    <div class="d-block mx-auto mb-1" width="24" height="24">
                        <Icon name="home" />
                    </div>
                    {item.title}
                </a>
            </li>
            {/each}
        </ul>
      </div>
    </Container>
</nav>

<style lang="text/scss">
    nav li a.nav-link {
        font-size: 20px;
        text-transform: uppercase;
    }
</style>