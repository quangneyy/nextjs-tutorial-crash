import { getPostIds, getPostById } from '../../lib/post'

const Post = ({ post }) => {
    return <div>
        {post.title}
    </div>
}

export const getStaticPaths = async () => {
    const paths = await getPostIds()

    return {
        paths,
        fallback: false, // bat ki path nao k return boi getStaticPaths se toi trang 404
    }
}

export const getStaticProps = async ({ params }) => {
    const post = await getPostById(params.id);

    return {
        props: {
            post
        }
    }
}

export default Post