import React from "react";
import './style/profile-posts.css';
import { Link } from "react-router-dom";

const MyReviews = ({myReviewsLink, likedReviewsLink}) => {
    return (
        <div>
            <ul class="nav nav-tabs nav-fill">
                <li class="nav-item bg-second rounded-top">
                    <Link to={myReviewsLink} class="nav-link text-dark" href="#">My Reviews</Link>
                </li>
                <li class="nav-item">
                    <Link to={likedReviewsLink} class="nav-link text-light" href="#">Liked Reviews</Link>
                </li>
            </ul>
        </div>
    );
}

const LikedReviews = ({myReviewsLink, likedReviewsLink}) => {
    return (
        <div>
            <ul class="nav nav-tabs nav-fill">
                <li class="nav-item">
                    <Link to={myReviewsLink} class="nav-link text-light" href="#">My Reviews</Link>
                </li>
                <li class="nav-item bg-second rounded-top">
                    <Link to={likedReviewsLink} class="nav-link text-dark" href="#">Liked Reviews</Link>
                </li>
            </ul>
        </div>
    );
}


export default function ProfilePosts({likedReviews, user}) {
    let myReviewsLink = '/profile';
    let likedReviewsLink = '/profile/liked-reviews';
    if (user) {
        myReviewsLink = `/profile/${user._id}`
        likedReviewsLink = `/profile/${user._id}/liked-reviews`
    }
    
    if (!likedReviews) {
        return <MyReviews myReviewsLink={myReviewsLink} likedReviewsLink={likedReviewsLink}/>
    } else {
        return <LikedReviews myReviewsLink={myReviewsLink} likedReviewsLink={likedReviewsLink}/>
    }
}