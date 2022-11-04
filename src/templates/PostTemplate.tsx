import React, { HTMLProps, Ref } from "react";
import { Layout } from "../layouts/Layout";

const Content = React.forwardRef((props: HTMLProps<HTMLDivElement>, ref: Ref<HTMLDivElement>) =>
    <div ref={ref} {...props} />
)

export default function PostTemplate(props: any) {
    const { title, html } = props.pageContext;
    return (
        <Layout>
            <Content className="px-64 16 py-16 format dark:format-invert max-w-none">
                <h2>{title}</h2>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </Content>
        </Layout>
    );
}