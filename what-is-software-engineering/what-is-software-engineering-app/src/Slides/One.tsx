import {useEffect, useRef} from 'react'
import myAudioFile from './assets/audios/1.mp3';
import Reveal from 'reveal.js';

function One() {

    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        debugger;
        const audio = audioRef.current;

        if (!audio) return;

        const handleTimeUpdate = () => {
            const currentTime = Math.floor(audio.currentTime);
            if (currentTime === 10) {
                Reveal.nextFragment();
                console.log('Event at 10 seconds!');
            }
            if (currentTime === 20) {
                console.log('Event at 20 seconds!');
            }
        };

        console.log("000000000000000000000000000");
        audio.addEventListener('timeupdate', handleTimeUpdate);

         return () => {
             audio.removeEventListener('timeupdate', handleTimeUpdate);
         };
    }, []);

    return (
        <>
            <div className="flex flex-col items-start">
                <div className="fragment fade-up text-xl text-left ">
                    <div className="flex items-center">
                        <i className="bi bi-arrow-right-circle"></i>
                        <span className="ml-2">Definition</span>
                    </div>
                    <div className="text-gray-500">
                        Software engineering involves the systematic application of engineering principles to software
                        development.
                    </div>
                </div>

                <div className="fragment fade-up text-xl text-left ">
                    <div className="flex items-center">
                        <i className="bi bi-arrow-right-circle"></i>
                        <span className="ml-2">Origin</span>
                    </div>
                    <div className="text-gray-500">
                        Emerged in the late 1960s due to increasing complexity of software applications.
                    </div>
                </div>

                <div className="fragment fade-up text-xl text-left ">
                    <div className="flex items-center">
                        <i className="bi bi-arrow-right-circle"></i>
                        <span className="ml-2">Methodologies</span>
                    </div>
                    <div className="text-gray-500">
                        Includes Agile, Waterfall, and DevOps, each with unique approaches to project management and
                        software development.
                    </div>
                </div>

                <div className="fragment fade-up text-xl text-left ">
                    <div className="flex items-center">
                        <i className="bi bi-arrow-right-circle"></i>
                        <span className="ml-2">Challenges</span>
                    </div>
                    <div className="text-gray-500">
                        Managing project scope, technical debt, and integrating cybersecurity.
                    </div>
                </div>

                <div className="fragment fade-up text-xl text-left ">
                    <div className="flex items-center">
                        <i className="bi bi-arrow-right-circle"></i>
                        <span className="ml-2">Demand</span>
                    </div>
                    <div className="text-gray-500">
                        Growing due to advancements in AI, machine learning, and cloud computing.
                    </div>
                </div>
            </div>

            <div>
                <audio ref={audioRef} controls>
                    <source src={myAudioFile} type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
        </>
    );
}

export default One;



