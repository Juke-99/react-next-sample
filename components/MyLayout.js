import Header from './Header'

const layoutStyle = {
  margin: '20px',
  padding: '10px',
  border: '0.3em solid #77ff89'
}

const Layout = props => (
  <div style={layoutStyle}>
    <Header></Header>
    {props.children}
  </div>
)

export default Layout