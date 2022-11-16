import GatsbyImage, { GatsbyImageOptionalProps } from "gatsby-image";
import React from "react";

export interface FluidImage {
    aspectRatio: number | null;
    base64: string | null;
    sizes: string | null;
    src: string | null;
    srcSet: string | null;
}


export interface FixedObject {
    width: number
    height: number
    src: string
    srcSet: string
    base64?: string | null
    tracedSVG?: string | null
    srcWebp?: string | null
    srcSetWebp?: string | null
    media?: string | null
}

interface Props extends GatsbyImageOptionalProps {
    fluid?: FluidImage | FluidImage[] | null;
    fixed?: FixedObject | FixedObject[] | null;

}

export const Img: React.FC<Props> = ({ fluid: f, fixed, ...props }) => {
    if (f != null) {
        return <GatsbyImage
            fluid={(f as any) /*{
                ...f,
                aspectRatio: f.aspectRatio !== null ? f.aspectRatio : 1,
                base64: f.base64 !== null ? f.base64 : "",
                sizes: f.sizes !== null ? f.sizes : "",
                src: f.src !== null ? f.src : "",
                srcSet: f.srcSet !== null ? f.srcSet : "",
            }*/}
            {...props}
        />
    } else if (fixed != null) {
        return <GatsbyImage
            fixed={(fixed as any) /*{
                ...f,
                aspectRatio: f.aspectRatio !== null ? f.aspectRatio : 1,
                base64: f.base64 !== null ? f.base64 : "",
                sizes: f.sizes !== null ? f.sizes : "",
                src: f.src !== null ? f.src : "",
                srcSet: f.srcSet !== null ? f.srcSet : "",
            }*/}
            {...props}
        />
    }

    return null;
}

