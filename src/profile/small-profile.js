import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { followUserThunk, unfollowUserThunk } from "../thunks/user-thunks";

const SmallProfile = ({user, currentUser}) => {
    const [following, setFollowing] = useState(false);
    const dispatch = useDispatch();
    const followUser = async () => {
        try {
            await dispatch(followUserThunk(user.username)).unwrap()
            setFollowing(true)
        } catch (error) {
            alert('Error following user. Please try again.');
        }
    }

    const unfollowUser = async () => {
        try {
            await dispatch(unfollowUserThunk(user.username)).unwrap()
            setFollowing(false)
        } catch (error) {
            alert('Error unfollowing user. Please try again.');
        }
    }

    useEffect(() => {
        if (currentUser?.following?.includes(user?.username)) {
            setFollowing(true);
        } else {
            setFollowing(false);
        }
    }, [currentUser, user])

    let username = currentUser?.username;
    if (user) {
        username = user?.username;
    }

    return (
        <div className='row border rounded-4 mb-3 py-2 mx-0 bg-second'>
            <div className='col-4'>
                <img alt='profile' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        className='rounded-circle img-fluid'></img>
            </div>
            <div className='col-8 position-relative d-flex flex-column justify-content-end'>
                {user && !following &&
                    <button className='btn btn-primary position-absolute end-0 top-0 me-3 mt-2' style={{ fontSize: '2vw' }} onClick={followUser}>Follow</button>
                }
                {user && following &&
                    <button className='btn btn-primary position-absolute end-0 top-0 me-3 mt-2' style={{ fontSize: '2vw' }} onClick={unfollowUser}>Unfollow</button>
                }

                {!user && <a href='/edit-profile' style={{ fontSize: '2vw' }} className='position-absolute end-0 top-0 me-3'>Edit Profile</a>}
                <h2 className='color-fourth text-break mb-0' style={{ fontSize: '9vw' }}>{username}</h2>
                {!user && <h3 className='color-fourth mb-0' style={{ fontSize: '4vw' }}>{currentUser?.email}</h3>}
                <span className='color-fourth mt-2' style={{ fontSize: '2vw' }}>
                    {currentUser?.followers.length} Followers • { }
                    {currentUser?.following.length} Following</span>
            </div>
        </div>
    );
}

export default SmallProfile;