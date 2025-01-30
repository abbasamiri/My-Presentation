
const TextAnimation = ({ text }: TextAnimationProps) => {
    return (
        <>
            <p>asd</p>
            <svg viewBox="0 0 1320 300">
                <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                    {text}
                </text>
            </svg>
        </>
    );
};

export default TextAnimation;


type TextAnimationProps = {
    text: string;
};
