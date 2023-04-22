import React from "react";

const SmallProfile = ({user, currentUser}) => {
    if (user) {
        currentUser = user;
    }
    return (
        <div className='row border rounded-4 mb-3 py-2 mx-0 bg-second'>
            <div className='col-4'>
                <img alt='profile' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        className='rounded-circle img-fluid'></img>
            </div>
            <div className='col-8 position-relative d-flex flex-column justify-content-end'>
                {!user && <a href='/edit-profile' style={{ fontSize: '2vw' }} className='position-absolute end-0 top-0 me-3'>Edit Profile</a>}
                <h2 className='color-fourth text-break mb-0' style={{ fontSize: '9vw' }}>{currentUser?.username}</h2>
                {!user && <h3 className='color-fourth mb-0' style={{ fontSize: '4vw' }}>{currentUser?.email}</h3>}
                <span className='color-fourth mt-2' style={{ fontSize: '2vw' }}>
                    {currentUser?.followers.length} Followers • { }
                    {currentUser?.following.length} Following</span>
            </div>
        </div>
    );
}

export default SmallProfile;