import axios from 'axios';

const KEY = 'AIzaSyBZI6cozaYGdUhIY4Ea2REgy12_VFfUFJE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    },
});
