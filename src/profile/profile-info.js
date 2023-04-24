import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { followUserThunk, unfollowUserThunk } from "../thunks/user-thunks";
import { useEffect, useState } from "react";

const ProfileInfo = ({viewingUser, currentUser, smallView}) => {
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
        if (currentUser?.following?.includes(viewingUser?.username)) {
            setFollowing(true);
        } else {
            setFollowing(false);
        }
    }, [currentUser, viewingUser])

    let username = currentUser?.username;
    let followersLink = '/profile/followers';
    let followingLink = '/profile/following';
    let followingLength = currentUser?.following.length;
    let followersLength = currentUser?.followers.length;
    if (viewingUser) {
        username = viewingUser?.username;
        followersLink = `/profile/${viewingUser.username}/followers`;
        followingLink = `/profile/${viewingUser.username}/following`;
        followingLength = viewingUser?.following.length;
        followersLength = viewingUser?.followers.length;
    }

    if (!smallView) {
        return (
            <div className='text-center px-2 pb-4 pt-1 accent-color rounded-4 shadow-sm'>

                {!viewingUser && <Link to='/edit-profile' className='d-block mt-2' style={{ fontSize: '0.8vw' }}>Edit Profile</Link>}
                
                <div className='px-2 my-2'>
                    <img alt='profile' src={`https://picsum.photos/seed/${username}/600`}
                            className='rounded-circle img-fluid'></img>
                </div>     
                <h2 className='color-dark-blue text-break' style={{ fontSize: '1.8vw' }}>{username}</h2>
                {!viewingUser && <h3 className='color-dark-blue my-2' style={{ fontSize: '1.2vw' }}>{currentUser?.email}</h3>}
                {!viewingUser && currentUser?.isAdmin && <h3 className='color-dark-blue my-2' style={{ fontSize: '1.2vw' }}>—Admin—</h3>}


                <Link to={followersLink} className='d-block color-fourth mt-2 text-decoration-none' style={{ fontSize: '1vw' }}>{followersLength} Followers</Link>
                <Link to={followingLink} className='d-block color-fourth text-decoration-none' style={{ fontSize: '1vw' }}>{followingLength} Following</Link>

                
                {viewingUser && !following && 
                    <button className='btn btn-primary mt-3' style={{ fontSize: '1.2vw' }} onClick={followUser}>Follow</button>
                }
                {viewingUser && following && 
                    <button className='btn btn-primary mt-3' style={{ fontSize: '1.2vw' }} onClick={unfollowUser}>Unfollow</button>
                }
            </div>
        );
    } else {
        return (
            <div className='row border rounded-4 mb-3 py-2 mx-0 accent-color'>
                <div className='col-4'>
                    <img alt='profile' src={`https://picsum.photos/seed/${username}/600`}
                            className='rounded-circle img-fluid'></img>
                </div>
                <div className='col-8 position-relative d-flex flex-column justify-content-end'>
                    {viewingUser && !following &&
                        <button className='btn btn-primary position-absolute end-0 top-0 me-3 mt-2' style={{ fontSize: '2vw' }} onClick={followUser}>Follow</button>
                    }
                    {viewingUser && following &&
                        <button className='btn btn-primary position-absolute end-0 top-0 me-3 mt-2' style={{ fontSize: '2vw' }} onClick={unfollowUser}>Unfollow</button>
                    }
    
                    {!viewingUser && <a href='/edit-profile' style={{ fontSize: '2vw' }} className='position-absolute end-0 top-0 me-3'>Edit Profile</a>}
                    {!viewingUser && currentUser?.isAdmin && <h3 className='color-dark-blue my-2' style={{ fontSize: '3.5vw' }}>—Admin—</h3>}

                    <h2 className='color-fourth text-break mb-0' style={{ fontSize: '7.5vw' }}>{username}</h2>
                    {!viewingUser && <h3 className='color-fourth mb-0' style={{ fontSize: '3.5vw' }}>{currentUser?.email}</h3>}
                    
                    <span className='color-fourth mt-0'><Link to={followersLink} className='color-fourth mt-2 text-decoration-none' style={{ fontSize: '2vw' }}>{followersLength} Followers</Link> • { }
                    <Link to={followingLink} className='color-fourth text-decoration-none' style={{ fontSize: '2vw' }}>{followingLength} Following</Link></span>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;