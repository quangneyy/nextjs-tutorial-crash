import Layout from '../../components/Layout';
import { Card } from "react-bootstrap";
import { getPosts } from '../../lib/post';
import Link from 'next/link';

const Posts = ({ posts }) => {

    return (
        <Layout>
            {posts.map(post => (
                <Card key={post.id}>
                    <Card.Body>
                        <Card.Title>
                            {post.title}
                        </Card.Title>
                        <Card.Text>
                            {post.body}
                        </Card.Text>
                        <Link href={`/posts/${post.id}`} passHref>
                            <Card.Link>See more</Card.Link>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </Layout>
    )
}

// Get static data from backend /db /api
// Lay du lieu tinh
export const getStaticProps = async () => {
    const posts = await getPosts()

    return {
        props: {
            posts
        }
    }
}

export default Posts;
