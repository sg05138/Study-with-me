import Link from "next/link";
import Layout from "../components/Layout";
import InputBox from "../components/InputBox";
import Head from "next/head";

const Index = () => (
    <Layout>
        <Head>
            <title>22HOURS</title>
        </Head>
        <h1>
            안녕하세요,
            <br />
            <Link href="/about">
                <a>22HOURS</a>
            </Link>
            입니다.
        </h1>
        <h2>
            <Link href="/aboutDamin">
                <a>🐸신다민</a>
            </Link>
            <br />
            <Link href="/aboutJeong">
                <a>🐹이정환</a>
            </Link>
            <br />
            <Link href="/aboutHyobin">
                <a>🐨김효빈</a>
            </Link>
            <br />
            <Link href="/aboutJong">
                <a>🐭이종원</a>
            </Link>
        </h2>
        <InputBox />
    </Layout>
);

export default Index;
