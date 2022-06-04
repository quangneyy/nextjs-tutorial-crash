import axios from 'axios';

export const getPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        return response.data;
    } catch (error) {
        console.log(error);
    }
}