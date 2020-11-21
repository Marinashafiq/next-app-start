import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import "./products.module.scss";

function Products({ data }) {
  useEffect(() => {
    console.log("Component did mount");
  }, []);

  return (
    <div>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link
        href={{
          pathname: "/about",
          query: { name: "test" },
        }}
      >
        <a>About us</a>
      </Link>
      <h1 className="header">PRODUCTS</h1>
    </div>
  );
}

Products.getInitialProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/3`);
  const json = await res.json();
  return { data: json };
};

export default Products;
