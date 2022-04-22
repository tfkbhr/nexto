import Nav from '@/components/Nav'

const Header = () => {
  return (
    <Nav>
      <Nav.Item path="/" name="Home" />
      <Nav.Item path="/about" name="About" />
    </Nav>
  )
}

export default Header
