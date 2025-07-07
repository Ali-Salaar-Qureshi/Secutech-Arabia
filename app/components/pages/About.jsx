import NavBar from "../shared/Navbar";
import AboutLanding from "../aboutpage/AboutLanding";
import MissionAndVision from "../aboutpage/MissionAndVision";
import OurJourney from "../aboutpage/OurJourney";
import Wcu from "../aboutpage/Wcu";
import OurTeam from "../aboutpage/OurTeam";
import CallToAction from "../shared/Cta";
import Footer from "../shared/Footer";

function AboutPage(){
    return(
        <main>
            <NavBar />
            <AboutLanding />
            <MissionAndVision />
            <OurJourney />
            <Wcu />
            <OurTeam />
            <CallToAction />
            <Footer />
        </main>
    );
};

export default AboutPage