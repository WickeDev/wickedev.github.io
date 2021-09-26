import { useStaticQuery, graphql, Link } from 'gatsby';

const LatestPostListQuery = graphql`
  query MyAllPosts {
    velogUser {
      posts {
        id
        title
        slug
        childMarkdownRemark {
          excerpt(truncate: true, pruneLength: 200)
        }
      }
    }
  }
`;

const IndexPage = () => {
  const data = useStaticQuery(LatestPostListQuery);

  console.log(JSON.stringify(data, null, 4))
  return (
    <main>
      <h1>최근 작성한 게시글 목록</h1>
      <ul>
        {data.velogUser.posts.map((post: any) => (
          <li key={post.id}>
            <h2>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.childMarkdownRemark.excerpt}</p>
            <hr />
          </li>
        ))}
      </ul>
    </main>
  );
};
export default IndexPage
