import { Card } from 'flowbite-react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Layout } from '../layouts/Layout';
import { Img } from '../components/GatsbyImageWrapper';

const LatestPostListQuery = graphql`
  query MyAllPosts {
    velogUser {
      posts {
        id
        title
        slug
        thumbnail {
          url
          childImageSharp {
            fluid(maxWidth: 480, maxHeight: 180) {
              srcWebp
              aspectRatio
              base64
              originalImg
              originalName
              presentationHeight
              presentationWidth
              sizes
              src
              srcSet
              srcSetWebp
              tracedSVG
            }
          }
        }
        childMarkdownRemark {
          excerpt(truncate: true, pruneLength: 200)
        }
      }
    }
  }
`;

const IndexPage = () => {
  const data = useStaticQuery<Queries.MyAllPostsQuery>(LatestPostListQuery);

  return (
    <Layout>
      <h2 className='text-3xl format dark:format-invert'>최근 작성한 게시글 목록</h2>
      <div className="columns-2 gap-8">
        {data.velogUser?.posts.map((post) => (
          <Link key={post.id} to={`/blog/${post.slug}`}>
            <Card className='mb-8 break-inside-avoid format dark:format-invert max-w-none'>
              <Img className='w-full' fluid={post.thumbnail?.childImageSharp?.fluid} />
              <h3>
                {post.title}
              </h3>
              <p>{post.childMarkdownRemark?.excerpt}</p>
            </Card>
          </Link>
        ))}
      </div>
    </Layout>
  );
};
export default IndexPage
