import { useState } from "react";

const LikeButton = ({ initialLikes, postId }) => {
    
    const [likes, setLikes] = useState(initialLikes);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = async () => {
        if (isLiked) return;
        const originalLikes = likes;
        setLikes(prev => prev + 1);
        setIsLiked(true);

        try {
            // todo: change to render 'server url' for deployment
            // await fetch(`https://week07-assignment-jzhp.onrender.com/likes/${postId}`, {
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
            setIsLiked(false);
        }
    };

    return (
        <>
            <span>
                <button onClick={handleLike} disabled={isLiked}><img src="like-icon.png" alt="like-icon" /></button>
                <p>{likes}</p>
            </span>
        </>
    )

};

export default LikeButton;