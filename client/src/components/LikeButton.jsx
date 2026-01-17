import { useState } from "react";

// todo: need values for initial likes?

const LikeButton = ({ initialLikes, postId }) => {

    // console.log(initialLikes);
    // console.log(postId);
    const [likes, setLikes] = useState(initialLikes);
    const [isLiking, setIsLiking] = useState(false);

    const handleLike = async () => {
        if (isLiking) return;

        // const originalLikes = likes;
        // setLikes(prev => prev + 1);
        setIsLiking(true);

        // try {
        //     const response = await fetch(`/likes/${postId}`, {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         }
        //     });

        //     if (!response.ok) throw new Error("failed to save like");
        //     const data = await response.json();
        //     setLikes(data.newCount);
        // } catch (error) {
        //     console.error("sync error: ", error);
        //     setLikes(originalLikes);
        // } finally {
        //     setIsLiking(false);
        // }
    };

    return (
        <>
            <span>
                <button onClick={handleLike} disabled={isLiking}><img src="like-icon.png" alt="like-icon" /></button>
                <p>{likes}</p>
            </span>           
        </>
    )

};

export default LikeButton;