import { useEffect, useState, Fragment } from "react";
import LikeButton from "./LikeButton";
import { Link } from "react-router"

function Posts() {
    const [comms, setComms] = useState([]);
    useEffect(() => {
        try {
            async function getPosts() {
                // todo: change to render 'server url' for deployment
                // const response = await fetch("http://localhost:8080/getcomms");
                const response = await fetch("https://week07-assignment-jzhp.onrender.com.com/getcomms");
                const commData = await response.json();
                setComms(commData);
            }
            getPosts();

        } catch (error) {
            console.error(error);
        }
    });

    return (
        <main>
            <nav><Link to="/form" className="round" title="post a comment">post comment</Link></nav>
            <h2>GUESTBOOK</h2>
            <section id="guestbookComms">
                {
                    comms.map((comm) => {
                        return (
                            <Fragment key={comm.idx}>
                                <article>
                                    <p>{comm.username}</p>
                                    <p>{comm.comment}</p>
                                    <div>
                                        {/* <span> */}
                                        <LikeButton initialLikes={comm.likes} postId={comm.idx} />
                                        {/* <img src="like-icon.png" alt="like-icon" /> */}
                                        {/* <p>{comm.likes}</p> */}
                                        {/* </span> */}
                                        <p>{comm.date} / #{comm.idx}</p>
                                    </div>
                                </article>
                            </Fragment>
                        );
                    })
                }
            </section>
        </main>
    )
}

export default Posts;