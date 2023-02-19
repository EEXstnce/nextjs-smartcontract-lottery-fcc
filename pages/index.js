import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
// import ManualHeader from '@/components/ManualHeader'
import Header from "../components/Header"
import { useMoralis } from "react-moralis"
import LotteryEntrance from '@/components/LotteryEntrance'


export default function Home() {
  const {isWeb3Enabled, chainId} = useMoralis()

  return (
    <>
      <Head>
        <title>Smart Contract Lottery App</title>
        <meta name="description" content="Smart Contract Lottery Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ManualHeader/> */}
      <Header />
      {/* header / connect button / nav bar */}
      <LotteryEntrance/>
    </>
  )
}
