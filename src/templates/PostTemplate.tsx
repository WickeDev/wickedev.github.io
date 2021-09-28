import styled from "@emotion/styled";
import { memo } from "react";
import { Layout } from "../layouts/Layout";

const Content = styled.div`
    & img {
        max-height: 100vh;
        max-width: 100%;
        width: auto;
        margin: 2rem auto 0px;
        height: auto;
        object-fit: contain;
        display: block;
    }

    & blockquote {
        margin: 2rem 0px;
        border-left: 4px solid rgb(32, 201, 151);
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        background: rgb(248, 249, 250);
        padding: 1rem 1rem 1rem 2rem;
        color: rgb(33, 37, 41);
    }
`

export default function PostTemplate(props: any) {
    const { title, html } = props.pageContext;
    return (
        <Layout>
            <Content>
                <h2>{title}</h2>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </Content>
        </Layout>
    );
}