import { graphql, Link, useStaticQuery } from 'gatsby';
import { Card } from '../components/Card';
import { Layout } from '../layouts/Layout';

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

  return (
    <Layout>
      <h3>최근 작성한 게시글 목록</h3>
      <ul className="list-none space-y-8 pl-0">
        {data.velogUser.posts.map((post: any) => (
          <li key={post.id}>
            <Card>
              <h2>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.childMarkdownRemark.excerpt}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
export default IndexPage
