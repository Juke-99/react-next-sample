import { withRouter } from 'next/router'
import Layout from '../components/MyLayout'

const Content = withRouter(props => (
	<div>
		<h1>{props.router.query.title}</h1>
		<p>This is the post page.</p>
	</div>
))

const Page = props => (
	<Layout>
		<Content></Content>
	</Layout>
)

export default Page