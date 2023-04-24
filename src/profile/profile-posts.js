import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostsList from "../home/post-list";
import { useSelector } from "react-redux";

const MyReviews = ({user, myReviewsLink, likedReviewsLink, myProfile}) => {
    return (
        <div>
            <ul class="nav nav-tabs nav-fill mb-3">
                <li class="nav-item accent-color rounded-top">
                    <Link to={myReviewsLink} class="nav-link text-dark" href="#">My Reviews</Link>
                </li>
                <li class="nav-item">
                    <Link to={likedReviewsLink} class="nav-link text-light" href="#">Liked Reviews</Link>
                </li>
            </ul>
        
            <PostsList userPosts={user} myProfile={myProfile}/>
        </div>
    );
}

const LikedReviews = ({user, myReviewsLink, likedReviewsLink}) => {
    return (
        <div>
            <ul class="nav nav-tabs nav-fill mb-3">
                <li class="nav-item">
                    <Link to={myReviewsLink} class="nav-link text-light" href="#">My Reviews</Link>
                </li>
                <li class="nav-item accent-color rounded-top">
                    <Link to={likedReviewsLink} class="nav-link text-dark" href="#">Liked Reviews</Link>
                </li>
            </ul>

            <PostsList userPosts={user}/>
        </div>
    );
}


export default function ProfilePosts({currentUser, viewingUser, likedReviews}) {
    let myReviewsLink = '/profile';
    let likedReviewsLink = '/profile/liked-reviews';
    let user = currentUser;
    let myProfile = true;
    if (viewingUser) {
        myReviewsLink = `/profile/${viewingUser.username}`
        likedReviewsLink = `/profile/${viewingUser.username}/liked-reviews`
        user = viewingUser;
        myProfile = false;
    }
    
    if (!likedReviews) {
        return <MyReviews user={user} myReviewsLink={myReviewsLink} likedReviewsLink={likedReviewsLink} myProfile={myProfile}/>
    } else {
        return <LikedReviews user={user} myReviewsLink={myReviewsLink} likedReviewsLink={likedReviewsLink} myProfile={myProfile}/>
    }
}