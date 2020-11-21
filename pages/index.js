import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { injectIntl } from "react-intl"

function Home({ data  , intl : { messages }}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={data.name} />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={data.images[0].url} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Link href="/Products/products">
        <a>Home</a>
      </Link>
      <Link
        href={{
          pathname: "/Products/[slug]",
          query: { slug: "products" },
        }}
      >
        <a>Blog Post</a>
      </Link>

      <h1>{messages.home.hello}</h1>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
Home.getInitialProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/3`);
  const json = await res.json();
  return { data: json };
};
export default injectIntl(Home);
