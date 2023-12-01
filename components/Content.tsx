import AboutSection from "./AboutSection";
import NoticeBoard from "./NoticeBoard";
import QuickLinks from "./QuickLinks";

const Content = () => {
    return (
        <div className="flex flex-row border-double p-3 border-b-4 border-black">
            <div className="flex  flex-col">
                <NoticeBoard />
                <QuickLinks />
            </div>
            <div>
                <AboutSection />
            </div>

        </div>
    );
}

export default Content;