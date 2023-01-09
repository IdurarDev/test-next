import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
}

export default function Post() {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </Layout>
    )
}