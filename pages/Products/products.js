import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import "./products.module.scss";

function Products() {

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


export default Products;
