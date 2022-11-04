import { graphql, Link, useStaticQuery } from 'gatsby';
import { Layout } from '../layouts/Layout';
import { Card } from 'flowbite-react'

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
      <main className='space-y-6 px-16 pt-8 pb-32'>
        <h2 className='text-3xl format dark:format-invert'>최근 작성한 게시글 목록</h2>
        <ul className="list-none space-y-8">
          {data.velogUser.posts.map((post: any) => (
            <li key={post.id}>
              <Link to={`/blog/${post.slug}`} className="className='p-0 m-0'">
                <Card className='format dark:format-invert max-w-none'>
                  <h3>
                    {post.title}
                  </h3>
                  <p>{post.childMarkdownRemark.excerpt}</p>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};
export default IndexPage
