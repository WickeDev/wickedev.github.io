import { CreatePagesArgs } from "gatsby";
import path from "path";

export async function createPages({ actions, graphql }: CreatePagesArgs) {
    const { createPage } = actions;

    const { data, errors }: any = await graphql(`
            {
                allMarkdownRemark {
                    nodes {
                        id
                        html
                        parent {
                            ... on VelogPost {
                                title
                                slug
                            }
                        }
                    }
                }
            }
        `);

    if (errors) {
        throw errors;
    }

    data.allMarkdownRemark.nodes.forEach((node: any) => {
        createPage({
            path: `/blog/${node.parent.slug}`,
            context: {
                html: node.html,
                title: node.parent.title,
            },
            component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
        });
    });
}