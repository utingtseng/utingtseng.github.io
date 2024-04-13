import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect } from 'react';

const IntroBox = ({setCompleted, progressCounter}) => {

    useEffect(() => {
        if (progressCounter > 10) {
            setCompleted(true)
        }
    }, [progressCounter])

    return (
        <div style={{ color: "white" }}>
            <h1 style={{ fontSize:48 }}>Hello, I'm Yuting</h1>
            <h1>Select 10 skills you like the look of to reveal celebration!</h1>
            <ProgressBar striped variant="warning" now={progressCounter*10} />
        </div>
    )
}

export default IntroBox;