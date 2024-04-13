import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect } from 'react';
import Confetti from 'react-confetti';

const IntroBox = ({completed, setCompleted, progressCounter}) => {

    useEffect(() => {
        if (progressCounter >= 10) {
            setCompleted(true)
            setTimeout(() => {
                setCompleted(false);
            }, 10000);
        }
    }, [progressCounter])

    return (
        <div style={{ color: "white", fontFamily: "Platypi" }}>
            {completed && <Confetti />}
            <h1 style={{ fontSize:48 }}>Hello, I'm Yuting</h1>
            <p>Select 10 interesting skills reveal celebration!</p>
            {completed? <h1>Hooray🎉🎉🎉</h1>: null}
            <ProgressBar striped variant="warning" now={progressCounter*10} />
        </div>
    )
}

export default IntroBox;