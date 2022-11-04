import React, { HTMLProps, Ref } from "react";

export const Card = React.forwardRef((props: HTMLProps<HTMLDivElement>, ref: Ref<HTMLDivElement>) =>
    <div ref={ref} {...props} />
)