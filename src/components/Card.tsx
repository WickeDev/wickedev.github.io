import React, { HTMLProps, Ref } from "react";

export const Card = React.forwardRef((props: HTMLProps<HTMLDivElement>, ref: Ref<HTMLDivElement>) =>
    <div className="relative rounded-xl overflow-auto" ref={ref} {...props} />
)