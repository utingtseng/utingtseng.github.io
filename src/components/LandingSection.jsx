import SlideShow from "./SlideShow";
import ChatBox from "./ChatBox";

const LandingSection = () => {
    return (
        <>
        <div>
            Hello, 
        </div>
        <div className="slide-show">
            <SlideShow/>
        </div>
        <div className="chat-box">
            <ChatBox />
        </div>
        </>
    )
}

export default LandingSection;