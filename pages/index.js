import Layout from "../components/MyLayout";
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

function getPosts() {
  return [
    {id: 'hello', title: 'hello'},
    {id: 'learn', title: 'learning'},
    {id: 'deploy', title: 'deploy ZEIT'}
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?id=${post.title}`}><a>{post.title}</a></Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>

      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post}></PostLink>
        ))}
      </ul>

      <style jsx>{`
        h1, a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
        }
      `}</style>
    </Layout>
  )
}

// const Index = props => (
//   <Layout>
//     <h1>Batman TV Show</h1>

//     <ul>
//       {props.shows.map(show => (
//         <li key={show.id}>
//           <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}><a>{show.name}</a></Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()

//   console.log(`Show data fetched. Count: ${data.length}`)

//   return {
//     shows: data.map(entry => entry.show)
//   }
// }

// export default Index