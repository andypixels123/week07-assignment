import { useState } from "react";

const LikeButton = ({ initialLikes, postId }) => {

    const [likes, setLikes] = useState(initialLikes);
    const [hasLiked, setHasLiked] = useState(false);

    const handleLike = async () => {
        if (hasLiked) return;
        const originalLikes = likes;
        setLikes(prev => prev + 1);
        setHasLiked(true);

        try {

            // todo: change to render 'server url' for deployment
            // fetch("http://localhost:8080/likes", {//localhost
            // fetch("https://week07-assignment-jzhp.onrender.com", {

            await fetch(`http://localhost:8080/likes/${postId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            });
        } catch (error) {
            console.error(error);
            setLikes(originalLikes);
        } finally {
            setHasLiked(false);
        }
    };

    return (
        <>
            <span>
                <button onClick={handleLike} disabled={hasLiked}><img src="like-icon.png" alt="like-icon" /></button>
                <p>{likes}</p>
            </span>
        </>
    )

};

export default LikeButton;