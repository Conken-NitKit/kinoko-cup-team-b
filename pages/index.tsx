import Link from 'next/link'
import Layout from '../components/Layout'
import styled from 'styled-components';

const TopBox = styled.div`
  padding: 40px;
  width: 100%;
  height: 100%;
`

const TopText = styled.div`
  font-size: 42px;
  font-weight: bold;
  color: #F0F0F0;
`


const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
      <TopBox>
        <TopText>そうかい</TopText>
      </TopBox>
    </Layout>
)

export default IndexPage
