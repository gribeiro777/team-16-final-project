import axios from 'axios';
import {getTrack} from "./spotify-service";

const DB_URL = 'https://webdevfinal-8nu2.onrender.com/api'
export const findPosts = async () => {

    const api = axios.create({
        withCredentials: true
    })

    const response = await axios.get(`${DB_URL}/get-all-posts`);
    const hello = getTrack('62PaSfnXSMyLshYJrlTuL3')
    // const also = await api.post(`${DB_URL}/create-post`,
    //     {
    //         songTitle: "cowboy beebop soundtrack",
    //         review: "this shit slapping FORREAL",
    //         username: "some random bum",
    //         artists: [],
    //         image: 'abc.com',
    //         time: '1:42',
    //         __v: 0
    //     })
    const posts = response.data;

    return posts
}
