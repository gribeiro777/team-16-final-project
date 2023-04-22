import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { followUserThunk, unfollowUserThunk } from "../thunks/user-thunks";
import { useEffect, useState } from "react";

const ProfileInfo = ({viewingUser, currentUser}) => {
    const [following, setFollowing] = useState(false);
    const dispatch = useDispatch();
    const followUser = async () => {
        try {
            await dispatch(followUserThunk(viewingUser.username)).unwrap()
            setFollowing(true)
        } catch (error) {
            alert('Error following user. Please try again.');
        }
    }

    const unfollowUser = async () => {
        try {
            await dispatch(unfollowUserThunk(viewingUser.username)).unwrap()
            setFollowing(false)
        } catch (error) {
            alert('Error unfollowing user. Please try again.');
        }
    }

    useEffect(() => {
        console.log(currentUser?.following)
        if (currentUser?.following?.includes(viewingUser?.username)) {
            setFollowing(true);
        } else {
            setFollowing(false);
        }
    }, [currentUser, viewingUser])

    let username = currentUser?.username;
    if (viewingUser) {
        username = viewingUser?.username;
    }

    return (
        <div className='text-center px-2 py-4 bg-second rounded-4 mb-3'>
            <div className='px-2 mb-2'>
            <img alt='profile' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    className='rounded-circle img-fluid'></img>
            </div>     
            <h2 className='color-dark-blue text-break' style={{ fontSize: '2vw' }}>{username}</h2>
            {!viewingUser && <h3 className='color-dark-blue my-2' style={{ fontSize: '1.3vw' }}>{currentUser?.email}</h3>}
            {!viewingUser && <Link to='/edit-profile' style={{ fontSize: '1.2vw' }}>Edit Profile</Link>}
            
            {viewingUser && !following && 
                <button className='btn btn-primary mt-3' style={{ fontSize: '1.2vw' }} onClick={followUser}>Follow</button>
            }
            {viewingUser && following && 
                <button className='btn btn-primary mt-3' style={{ fontSize: '1.2vw' }} onClick={unfollowUser}>Unfollow</button>
            }
        </div>
    );
}

export default ProfileInfo;