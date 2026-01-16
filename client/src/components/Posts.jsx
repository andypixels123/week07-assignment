import { Link } from "react-router"

function Posts() {
    // todo: get comments from db .map?? to produce html?
    // likeCount++;
    // p2.innerText = likeCount;// show likes on page
    // let commLikes = {
    //   likeId: commId,
    //   likeQty: likeCount
    // };
    // TODO: CHANGE TO RENDER 'SERVER URL' WHEN DEPLOYED
    // fetch("http://localhost:8080/likes", {//localhost
    // fetch("https://week04-assignment-1-j3wt.onrender.com/likes", {// mk2
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({ commLikes })
    // });

    return (
        <main>
            <h2>GUESTBOOK</h2>
            <section id="guestbookComms">comments</section>
        </main>
    )
}

export default Posts