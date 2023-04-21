import React from "react";
import './style/profile-posts.css';
import { Link } from "react-router-dom";

const MyReviews = () => {
    return (
        <div>
            <ul class="nav nav-tabs nav-fill">
                <li class="nav-item bg-second rounded-top">
                    <Link to='/profile' class="nav-link text-dark" href="#">My Reviews</Link>
                </li>
                <li class="nav-item">
                    <Link to='/profile/liked-reviews' class="nav-link text-light" href="#">Liked Reviews</Link>
                </li>
            </ul>
        </div>
    );
}

const LikedReviews = () => {
    return (
        <div>
            <ul class="nav nav-tabs nav-fill">
                <li class="nav-item">
                    <Link to='/profile' class="nav-link text-light" href="#">My Reviews</Link>
                </li>
                <li class="nav-item bg-second rounded-top">
                    <Link to='/profile/liked-reviews' class="nav-link text-dark" href="#">Liked Reviews</Link>
                </li>
            </ul>
        </div>
    );
}


export default function ProfilePosts({likedReviews}) {
    if (!likedReviews) {
        return <MyReviews/>
    } else {
        return <LikedReviews/>
    }
}