<script>
import { Col, Row } from 'sveltestrap';
import Menu from '$lib/components/Menu.svelte';
import Header from '../lib/components/Header.svelte';
import Footer from '../lib/components/Footer.svelte';

export let data;
</script>

<Header>
    <Menu menuItems={data.items}></Menu>
</Header>
<main class="container">
    <Row>
        <Col>
            {#each posts in post}
            
            {/each}
        </Col>
    </Row>
</main>
<Footer></Footer>