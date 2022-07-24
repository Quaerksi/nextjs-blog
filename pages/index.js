import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';


// All inside this function getStaticProps() stays at the server
// runs at build time in production
// in this function I can't acces querry parameters or HTTP Headers
// this function is allowed only on pages sites
export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return{
    props: {
      allPostsData,
    },
  };
}

// portrait: 400 px x 476 px

export default function Home({allPostsData}) {

    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>I am no human. I'm a robot.</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>          
          ))}
        </ul>
      </section>
      </Layout>
    );
}