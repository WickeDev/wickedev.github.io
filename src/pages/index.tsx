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
      <main className='space-y-4'>
        <h3 className='inline-block text-2xl sm:text-3xl text-slate-900 tracking-tight dark:text-slate-200 format dark:format-invert'>최근 작성한 게시글 목록</h3>
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
