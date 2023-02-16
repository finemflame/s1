<script>
import { Col, Row } from 'sveltestrap';
import Menu from '$lib/components/Menu.svelte';
export let data;
</script>

<Menu menuItems={data.items}></Menu>
<main class="container">
    <Row>
        <Col>
            TEST
        </Col>
    </Row>
</main>