import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components';

type Props = {
  children?: ReactNode
  title?: string
}

const LayoutWrapper = styled.div`
  background: linear-gradient(#02AAB0, #00CDAC);
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <LayoutWrapper>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </LayoutWrapper>
)

export default Layout
