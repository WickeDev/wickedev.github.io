import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'

const Main = styled.main`
    width: 768px;
    margin: 0px auto 5rem;
`

const Navigation = styled.nav`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    min-height: 64px;
`

interface LayoutProps {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
    return <Main>
        <Navigation>
            <Link to='/'>홈</Link>
        </Navigation>
        {children}
    </Main>
}