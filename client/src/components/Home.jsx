import { HashLink } from 'react-router-hash-link';

function Home() {

    return (
        <>
            <main>
                <h2>HOME</h2>
                <section>
                    <div className="item round">
                        <p className="quote">The saying "pigs might fly" is an idiom used to express that something is impossible or
                            will never happen. It's a sarcastic or humorous response to a statement or situation that is
                            extremely unlikely to occur. For example, if someone says they will finish a huge assignment by
                            10pm on a Sunday evening, a person might reply - "Yeah, and pigs might fly".</p>
                        <p>Credit - Google AI.</p>
                    </div>
                </section>
                <section>
                    <div className="item round">
                        <h2>I Don't Believe You</h2>
                        <img className="round" src="/pigs-might-fly.webp" width="300" height="304" alt="flying pig graphic" />
                        <p className="item-txt">...nothing is something??</p>
                        <HashLink className="btn round" to="#top">prove it!</HashLink>
                    </div>
                </section>
                <section>
                    <div className="item round">
                        <h2>When Flying Pigs Fall</h2>
                        <img className="round" src="/pigs-might-fly.webp" width="300" height="304" alt="flying pig graphic" />
                        <p className="item-txt">...flying for beginners</p>
                        <HashLink className="btn round" to="#top">wings</HashLink>
                    </div>
                </section>
                <section>
                    <div className="item round">
                        <h2>Pig Fodder</h2>
                        <img className="round" src="/pigs-might-fly.webp" width="300" height="304" alt="flying pig graphic" />
                        <p className="item-txt">...food for thought</p>
                        <HashLink className="btn round" to="#top">fuel</HashLink>
                    </div>
                </section>
                <section>
                    <div className="item round">
                        <h2>Alternative Travel</h2>
                        <img className="round" src="/pigs-might-fly.webp" width="300" height="304" alt="flying pig graphic" />
                        <p className="item-txt">...making notes</p>
                        <HashLink className="btn round" to="#top">bus</HashLink>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home