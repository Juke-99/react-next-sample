import Layout from "../components/MyLayout";
import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}><a>{props.title}</a></Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js"></PostLink>
        <PostLink title="Learn Next.js"></PostLink>
        <PostLink title="Deploy apps Zeit"></PostLink>
      </ul>
    </Layout>
  )
}
