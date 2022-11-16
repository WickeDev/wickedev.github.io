import { Layout } from "../layouts/Layout";


export default function PostTemplate(props: any) {
    const { title, html } = props.pageContext;
    return (
        <Layout>
            <div className="format dark:format-invert mx-auto max-w-none max-w-5xl">
                <h2>{title}</h2>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    );
}