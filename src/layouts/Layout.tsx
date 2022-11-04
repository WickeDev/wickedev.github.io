import { Link } from 'gatsby'
import React, { HTMLProps, Ref } from 'react'

const Main = React.forwardRef((props: HTMLProps<HTMLDivElement>, ref: Ref<HTMLDivElement>) =>
    <div ref={ref} {...props} />
)

const Navigation = React.forwardRef((props: HTMLProps<HTMLDivElement>, ref: Ref<HTMLDivElement>) =>
    <div ref={ref} {...props} />
)

interface LayoutProps {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
    return <Main>
        <Navigation>
            <Link to='/'>홈</Link>
            <Link to='/about'>Who am I</Link>
        </Navigation>
        {children}
    </Main>
}