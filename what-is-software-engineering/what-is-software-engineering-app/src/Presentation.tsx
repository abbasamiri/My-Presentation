import {useEffect} from "react";
import Reveal from "reveal.js";
import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
 import One from "./Slides/One.tsx";
import Zero from "./Slides/Zero.tsx";

function Presentation() {
    useEffect(() => {
        Reveal.initialize({
            controls: true,
            progress: true,
            center: true,
            hash: true,
        });
    }, []);

    return (
        <div className="reveal text-secondary" style={{ height: "100vh" }} >
            <div className="slides">
                <section>
                    <Zero />
                </section>
                <section>
                    {/* <One /> */}
                </section>
                <section>
                    <h2>Slide 2</h2>
                </section>
                <section>
                    <h2>Slide 3</h2>
                </section>
            </div>
        </div>
    );
}

export default Presentation;
