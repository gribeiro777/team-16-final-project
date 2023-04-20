import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserThunk } from "../thunks/auth-thunks";
import { Link } from "react-router-dom";

const ProfileInfo = () => {
    const { currentUser } = useSelector((state) => state.authData);
    const [profile, setProfile] = React.useState(currentUser);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const getCurrentUser = async () => {
            const { payload } = await dispatch(getCurrentUserThunk()).unwrap();
            setProfile(payload);
        }
        getCurrentUser();
    }, []);

    return (
        <div>
            <div className='text-center'>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                className='rounded-circle img-fluid'></img>
                <h2>{currentUser.username}</h2>
                <h4>{currentUser.email}</h4>
                <Link to='/edit-profile'>Edit Profile</Link>
                <p>{profile?.username}</p>
            </div>
        </div>
    );
}

export default ProfileInfo;