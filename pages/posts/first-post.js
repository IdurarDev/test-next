import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First Post</title>
                </Head>
                <h1>First Post</h1>
                <h2>This is my first post it talks about the oneness in worship.</h2>
            </Layout>
        </>
    )
  }