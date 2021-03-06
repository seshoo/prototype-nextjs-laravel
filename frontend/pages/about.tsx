import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import Layout from '../components/layouts/default';

export default function AboutPage(props) {
    return (
        <Layout>
            <Head>
                <title>About - Create Next App</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <h1>About page</h1>
            {props.data && <div>{JSON.stringify(props.data, null, 2)}</div>}
            <Link href="/">
                <a>Home page</a>
            </Link>
        </Layout>
    );
}

export async function getServerSideProps() {
    const { data } = await axios.get(`http://backend/api`);

    // Pass data to the page via props
    return { props: { data } };
}
