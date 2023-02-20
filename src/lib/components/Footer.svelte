<script>
    import {Container, Col, Icon, Nav, NavLink, Row } from 'sveltestrap'
</script>

<slot />

<!-- Footer -->
<footer class="text-center text-lg-start bg-white">
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <!-- Right -->
        <Nav>
            <NavLink href="/">
                <Icon name="linkedin" />
            </NavLink>
            <NavLink href="/">
                <Icon name="youtube" />
            </NavLink>
            <NavLink href="/">
                <Icon name="facebook" />
            </NavLink>
            <NavLink href="/">
                <Icon name="instagram" />
            </NavLink>
        </Nav>
        <!-- Right -->
    </section>

    <!-- Section: Links  -->
    <section class="footer--left">
        <Container text-center text-md-start class="mt-5">
            <!-- Grid row -->
            <Row mt-3>
                <!-- Grid column -->
                <Col md="12" lg="6" xl="6" mx-auto mb-4>
                    <!-- Content -->
                    <h3 class="text-uppercase fw-bold mb-4">
                        Erweitern Sie ihr Geschäft und
                    </h3>
                    <p>
                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit.
                    </p>
                </Col>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4">
                        Products
                    </h6>
                    <p>
                        <a href="#!" class="text-reset">Angular</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">React</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Vue</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Laravel</a>
                    </p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4">
                        Useful links
                    </h6>
                    <p>
                        <a href="#!" class="text-reset">Pricing</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Settings</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Orders</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Help</a>
                    </p>
                </div>
                <!-- Grid column -->
            </Row>
        </Container>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <nav class="copy-nav text-center text-muted p-4 d-flex justify-content-center" style="background-color: rgba(0, 0, 0, 0.025);">
        © 2023 <NavLink href="https://chooomedia.com/">CHOOOMEDIA</NavLink>
    </nav>
    <!-- Copyright -->
</footer>
<!-- Footer -->

<style lang="scss">
footer {
   font-size: 18px;

   .copy-nav {
    gap: 5px;
   }
}
</style>