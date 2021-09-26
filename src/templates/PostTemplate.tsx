import { memo } from "react";

export default function PostTemplate(props: any) {
    const { title, html } = props.pageContext;
    return (
        <main>
            <h2>{title}</h2>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </main>
    );
}