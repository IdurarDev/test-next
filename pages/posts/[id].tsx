import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head'
import Date from '../../components/date';
import utilsStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next';


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false, // if fallback is false then any paths not returned getStaticPaths will result in a 404 page.
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params?.id as string);
    return {
      props: {
        postData,
      },
    };
}


export default function Post({ postData }: {postData: {title: string, date: string, contentHtml: string}}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilsStyles.headingXl}>{postData.title}</h1>
                <div className={utilsStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}
