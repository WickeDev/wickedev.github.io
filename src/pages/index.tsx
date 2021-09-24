import { useStaticQuery, graphql } from 'gatsby';
import * as React from "react"

const VelogPosts = () => {
  const res = useStaticQuery<GatsbyTypes.VelogPostsQuery>(graphql`
      query VelogPosts {
          velog {
              posts(username: "wickedev") {
              id
              title
              body
              }
          }
      } 
`)

  return <pre>
    {JSON.stringify(res, null, 4)}
  </pre>
}

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>
        Wickedev Blog
      </h1>
      <VelogPosts />
    </main>
  )
}

export default IndexPage
