import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './header'
import Options from './options'

export default function Home() {
  return (
    <div className={styles.container}>
    <Header></Header>
    <Options></Options>
    </div>
  )
}
