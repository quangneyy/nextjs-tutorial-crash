import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return <Layout>
    <h1>My Next App</h1>
    <Link href='/about'>ABOUT PAGE</Link>
  </Layout>
}
