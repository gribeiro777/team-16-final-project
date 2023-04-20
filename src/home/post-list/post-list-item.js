import React from "react";

const PostItem = (
    {
        post = {
            _id: {
                "$oid": "642e1afec246b2745db4bdc6"
            },
            songTitle: "cowboy beebop soundtrack",
            review: "this shit slapping FORREAL",
            username: "some random bum",
            artists: [],
            image: 'abc.com',
            time: '1:42',
            __v: 0
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col justify-content-center">
                    <img className="rounded-circle" height={64} src={`/images/${post.image}`}/>
                </div>
                <div className="col-10">
                    <div><b>{post.username}</b> <span>&#183;</span> {post.time}
                        <i className="bi bi-x-lg float-end"></i>
                    </div>
                    <div>{post.review}</div>
                </div>
                <div className="col-2">

                </div>
            </div>
        </li>
    );
};
export default PostItem;