import Link from 'next/link'
import Layout from '../components/Layout'
import styled from 'styled-components';
import { GameTextData } from '../utils/game-text-data';
import { MessageWindow } from '../components/GameText/MessageWindow';

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
console.log("test");
console.log(GameTextData[0].text);

const IndexPage = ({props}) => (
  
    <Layout title="Home | Next.js + TypeScript Example">
      <TopBox>
        <TopText>そうかい</TopText>
        <MessageWindow></MessageWindow>
      </TopBox>
    </Layout>
)

export default IndexPage

export async function getServerSideProps() {
  return { props: { GameTextData } }
} 