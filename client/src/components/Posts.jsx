import { useEffect, useState, Fragment } from "react";
import LikeButton from "./LikeButton";
// import { Link } from "react-router"

function Posts() {
    const [comms, setComms] = useState([]);
    useEffect(() => {
        try {
            async function getPosts() {
                // todo: change to render 'server url' for deployment
                const response = await fetch(
                    "http://localhost:8080/getcomms"
                );
                // const response = await fetch(
                // "https://week07-assignment-jzhp.onrender.com.com/getcomms"
                // );
                const commData = await response.json();
                // console.log(commData);
                setComms(commData);
            }
            getPosts();

        } catch (error) {
            console.error(error);
        }
    }, []);

    // todo: =====================================
    //! add likes ////////////////////////////////////
    // likeCount++;
    // p2.innerText = likeCount;// show likes on page
    // let commLikes = {
    //   likeId: commId,
    //   likeQty: likeCount
    // };
    // todo: change to render 'server url' for deployment
    // fetch("http://localhost:8080/likes", {//localhost
    // fetch("https://week04-assignment-1-j3wt.onrender.com/likes", {// mk2
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({ commLikes })
    // });

    // comm.comment
    // comm.date
    // comm.idx
    // comm.likes
    // comm.username

    // <article>
    //     <h3>username</h3>
    //     <p>comment</p>
    //     <div>
    //         <span>
    //             <img src="likes-icon.png" />
    //             <p>like count</p>
    //         </span>
    //         <p>Date / #2</p>
    //     </div>
    // </article>

    // todo: build comments html + like buttons
    return (
        <main>
            <h2>GUESTBOOK</h2>
            <section id="guestbookComms">
                {
                    comms.map((comm) => {
                        return (
                            <Fragment key={comm.idx}>
                                <article>
                                    <h3>{comm.username}</h3>
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

export default Posts