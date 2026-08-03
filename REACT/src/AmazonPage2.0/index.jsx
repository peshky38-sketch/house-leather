import Navigation from "./Navigation";
import MainSection from "./MainSection";
import Sidebar from "./Sidebar";

function AmazonPage() {
    return (
        <div>
            <Navigation />
            <div style={ { display: "flex" } }>
                <Sidebar />
                <MainSection />
            </div>
        </div>
    );
}

export default AmazonPage;