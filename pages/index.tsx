import { GetStaticProps } from 'next';
import Head from 'next/head'
import Link from 'next/link';
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css'

export default function Home({ allPostsData }: { 
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
 }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>I'm a FullStack Developer 💻
          I love to solve real problems with using programming and technologies. I'm always learning and improving myself.</p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br/>
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}
