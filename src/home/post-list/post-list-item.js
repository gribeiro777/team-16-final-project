import React from "react";
import {Link} from "react-router-dom";
import '../style/index.css'

const PostItem = (
    {
        post = {
            _id: 'abc',
            songTitle: 'Hello',
            review: 'Adele woohoo',
            username: 'jerry jones',
            rating: 5,
            artists: ['Adele'],
            genre: 'singing',
            albumArt: 'abc.com',
            spotifyURI: 'spotify.com/tracks/123',
            spotifyID: 'efg',
            likes: 10,
        }
    }
) => {
    return(
        <li className="list-group-item main-color text-off-black border-start-0 border-end-0 accent-border border-3 pt-3 pb-3">
            <div className="row">
                <div className="col-3">
                <Link className="text-decoration-none" to={`/tracks/${post.spotifyID}`}>
                    <div className="row">
                        <div className="col-auto d-flex flex-wrap align-items-center">
                                <img className="rounded-4 " height={64} src={post.albumArt}/>
                        </div>
                        <div className="col">
                            <div className="row text-off-black">{post.songTitle}</div>
                            <div className="row time">{post.artists.map(artist => artist.name).join(', ')}</div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-9">
                    <div><b>
                        <Link to={`/profile/${post.username}`} style={{textDecoration: 'none'}}>
                            <span className="username text-off-black">{post.username}</span>
                        </Link></b> <span>&#183;</span> <span className="time">{post.time}</span>
                    </div>
                    <div>{post.review}</div>
                </div>
                <div className="col-2">

                </div>
            </div>
            <div className="row"></div>
        </li>
    );
};
export default PostItem;