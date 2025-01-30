import AudioFile from '../assets/audios/1.mp3';
import VttFile from '../assets/audios/1.vtt';
import Narrator from '../Narrator';

const One = () => {
    return (
        <Narrator AudioFile={AudioFile} VttFile={VttFile}>
            <p className="text-4xl">Software Engineering</p>
            <p className="text-2xl">Introduction</p>
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
        </Narrator>
    );
}

export default One;
