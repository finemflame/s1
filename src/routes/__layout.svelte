<script>
  import { Container, Nav, NavLink } from "sveltestrap";
</script>

<main>
  <Container>
    <Nav>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Another Link</NavLink>
      <NavLink disabled href="#">Disabled Link</NavLink>
    </Nav>
  
    <slot />
  </Container>
</main>

<style lang="scss">
  @import '../scss/global.scss';
</style>