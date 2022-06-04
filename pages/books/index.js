import Card from 'react-bootstrap/Card'
import { getRandomJoke } from '../../lib/joke'
import Button from 'react-bootstrap/Button'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { getBooks } from '../../lib/book'

const Books = ({ books }) => {
	return (
		<Layout>
            my book
			{/* <Card className='my-3 shadow'>
				<Card.Body>
					<Card.Title>Here's your random joke for today</Card.Title>
					<Card.Text>{joke.value}</Card.Text>
					<Link href='/'>
						<Button variant='dark'>Back</Button>
					</Link>
				</Card.Body>
			</Card> */}
		</Layout>
	)
}

// Du lieu phu thuoc vao moi request, nhung ma van tao ra HTML tinh cho front-end, nen van tot cho SEO
export const getStaticProps = async () => {
	const books = await getBooks()
	return {
		props: {
			books
		}
	}
}

export default Books