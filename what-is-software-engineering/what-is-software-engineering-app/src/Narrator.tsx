import { ReactNode, useEffect, useRef } from 'react';
import Reveal from 'reveal.js';

const Narrator = ({ children, className = '', AudioFile = undefined, VttFile = '' }: ContainerProps): JSX.Element => {

    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audio = audioRef.current;
        let cues: Cue[] = [];

        if (VttFile) {
            fetch(VttFile)
                .then(response => response.text())
                .then(data => {
                    cues = parseVTT(data);
         if (audioRef.current) {
             audioRef.current.play();
           }
     }, 25);

                });
        }

        if (!audio) return;

        const handleTimeUpdate = () => {
            const currentTime = audio.currentTime;
            cues.forEach(cue => {
                if (currentTime >= cue.start && currentTime <= cue.end) {
                    if (!cue.handled) {
                        cue.handled = true;
                        if (cue.command !== '') {
                            if (cue.command === 'nextFragment') {
                                Reveal.nextFragment();
                            }
                            if (cue.command === 'nextSlide') {
                                Reveal.next;
                            }
                        }
                    }
                }
            });
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);        
        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    return (
        <>
            {AudioFile ? <div>
                <audio ref={audioRef}>
                    <source src={AudioFile} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
                : null}
            <div className={className}>{children}</div>
        </>
    );
};

export default Narrator;

type ContainerProps = {
    children: ReactNode;
    className?: string;
    VttFile?: string;
    AudioFile?: string;
};

interface Cue {
    start: number;
    end: number;
    text?: string;
    command?: string;
    handled: boolean;

}

function parseVTT(vttText: string): Cue[] {
    const lines = vttText.split('\n').filter(Boolean);
    const cueList: Cue[] = [];
    let cue: Partial<Cue> = {};
    lines.forEach((line) => {
        if (line.includes('-->')) {
            const times = line.split(' --> ');
            cue = {
                start: parseVTTTime(times[0]),
                end: parseVTTTime(times[1]),
            };
        } else if (cue.start !== undefined && cue.end !== undefined && line.startsWith('!')) {
            cue.command = line.replace('!', '');
            cueList.push(cue as Cue);
            cue = {};
        } else if (cue.start !== undefined && cue.end !== undefined) {
            cue.text = line;
        }
    });
    return cueList;
}

function parseVTTTime(timeString: string): number {
    const [m, sm] = timeString.split(':');
    const [seconds, milliseconds] = sm.split('.');
    return (+m) * 60 + (+seconds) + (+milliseconds / 1000);
}
