import { DarkThemeToggle, Flowbite, Navbar } from 'flowbite-react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";
import React, { HTMLProps, Ref } from 'react';

const Main = React.forwardRef((props: HTMLProps<HTMLDivElement>, ref: Ref<HTMLDivElement>) =>
    <div className='container mx-auto bg-gray-100 dark:bg-gray-700' ref={ref} {...props} />
)

const Content = React.forwardRef((props: HTMLProps<HTMLDivElement>, ref: Ref<HTMLDivElement>) =>
    <div className='p-8 space-y-8' ref={ref} {...props} />
)

interface LayoutProps {
    children: React.ReactNode
}


const query = graphql`
  query {
    file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export function Layout({ children }: LayoutProps) {
    const data = useStaticQuery(query)

    return <Flowbite>
        <Main>
            <header className='sticky top-0 z-40 flex-none mx-auto w-full bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800'>
                <Navbar
                    fluid={true}
                    rounded={true}
                >
                    <Navbar.Brand href="/">
                        <Img className="mr-3 h-6 sm:h-9"
                            alt="Logo"
                            fixed={data.file.childImageSharp.fixed} />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            Wickedev's Blog
                        </span>
                    </Navbar.Brand>
                    <Navbar.Collapse>
                        <Navbar.Link className='text-lg' href="/">
                            Home
                        </Navbar.Link>
                        <Navbar.Link className='text-lg' href="/about">
                            About
                        </Navbar.Link>
                    </Navbar.Collapse>
                    <DarkThemeToggle />
                </Navbar>
            </header>
            <Content>
                {children}
            </Content>
        </Main>
    </Flowbite>
}