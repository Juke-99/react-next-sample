import Layout from "../components/MyLayout";
import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link as={`/p?${props.id}`} href={`post?title=${props.title}`}><a>{props.title}</a></Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-next" title="Hello Next.js"></PostLink>
        <PostLink id="learn-next" title="Learn Next.js"></PostLink>
        <PostLink id="deploy-next" title="Deploy apps Zeit"></PostLink>
      </ul>
    </Layout>
  )
}
