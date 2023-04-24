import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPostThunk } from "../thunks/post-thunks";

export const ReviewForm = ({currentTrack}) => {
    const { currentUser } = useSelector(state => state.authData)

    const [rating, setRating] = React.useState(0);
    const stars = [1, 2, 3, 4, 5];

    const handleRating = (e) => {
        if (e.target.id !== rating) {
            setRating(e.target.id);
        } else {
            setRating(0);
        }
    }
    
    const fillStars = (index) => {
        if (index <= rating) {
            return <i id={index} class="bi bi-star-fill pe-1" onClick={handleRating}></i>
        } else {
            return <i id={index} class="bi bi-star pe-1" onClick={handleRating}></i>
        }
    }


    const dispatch = useDispatch();
    const [review, setReview] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = { 
            songTitle: currentTrack.name,
            review: review,
            username: currentUser.username,
            rating: rating,
            artists: currentTrack.artists,
            time: new Date().toLocaleString(),
            genre: "genre",
            albumArt: currentTrack.album.images[0].url,
            spotifyURI: currentTrack.uri,
            spotifyID: currentTrack.id,
            likes: 0, 
        };
        try {
            await dispatch(createPostThunk(post)).unwrap();
            setReview('');
            setRating(0);
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className="row">
            <div className="col-auto">
                <img src={`https://picsum.photos/seed/${currentUser?.username}/600`} width={60}
                    className='rounded-circle' alt='profile'/>
            </div>
            <div className="col-10 bg-white rounded-4 pb-2">
                <textarea placeholder="Write a Review"
                        onChange={(e) => setReview(e.target.value)}
                        value={review}
                        className="form-control border-0">
                </textarea>
            <div>
                <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold" onClick={handleSubmit}>
                    Post
                </button>
                <div className="text-dark fs-3">
                    {stars.map((star) => fillStars(star))}
                </div>
            </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}