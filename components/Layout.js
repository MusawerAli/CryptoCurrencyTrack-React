import Head from 'next/head';
import Link from 'next/link';
import Styles from './component.module.css';
const Layout = ({ children, title = 'Crypto Tracker' }) => {
    return (
        <div className={Styles.layout}>
        <Head>
          <title>{title}</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <header className='header'>
          <Link href='/' passHref>
            <a>
              <h1 >Crypto Trcker With React and Next.js</h1>
            </a>
          </Link>
        </header>
        <main>{children}</main>
      </div>
    )
}

export default Layout
