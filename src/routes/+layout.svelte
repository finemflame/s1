<script>
    import Menu from '$lib/components/Menu.svelte';
    import Header from '../lib/components/Header.svelte';
    import Footer from '../lib/components/Footer.svelte';

    export let data;
</script>

<Header>
    <Menu menuItems={data.items}></Menu>
</Header>
<main class="container">
    <slot />
</main>
<Footer></Footer>

<style lang="text/scss" global>
    @import '../styles.scss';
</style>