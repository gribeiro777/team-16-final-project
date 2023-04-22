import React from "react";
import './style/profile-posts.css';
import { Link } from "react-router-dom";
import PostsList from "../home/post-list";

const MyReviews = ({myReviewsLink, likedReviewsLink}) => {
    return (
        <div>
            <ul class="nav nav-tabs nav-fill mb-3">
                <li class="nav-item bg-second rounded-top">
                    <Link to={myReviewsLink} class="nav-link text-dark" href="#">My Reviews</Link>
                </li>
                <li class="nav-item">
                    <Link to={likedReviewsLink} class="nav-link text-light" href="#">Liked Reviews</Link>
                </li>
            </ul>
        
            <PostsList/>
        </div>
    );
}

const LikedReviews = ({myReviewsLink, likedReviewsLink}) => {
    return (
        <div>
            <ul class="nav nav-tabs nav-fill mb-3">
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


export default function ProfilePosts({likedReviews, viewingUser}) {
    let myReviewsLink = '/profile';
    let likedReviewsLink = '/profile/liked-reviews';
    if (viewingUser) {
        myReviewsLink = `/profile/${viewingUser.username}`
        likedReviewsLink = `/profile/${viewingUser.username}/liked-reviews`
    }
    
    if (!likedReviews) {
        return <MyReviews myReviewsLink={myReviewsLink} likedReviewsLink={likedReviewsLink}/>
    } else {
        return <LikedReviews myReviewsLink={myReviewsLink} likedReviewsLink={likedReviewsLink}/>
    }
}