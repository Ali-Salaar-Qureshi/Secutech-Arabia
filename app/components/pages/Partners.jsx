import NavBar from "../shared/Navbar";
import PartnerLanding from "../partnerpage/PartnerLanding";
import StrategicTechnologyAlliance from "../partnerpage/StrategicTechnologyAlliance";
import OtherPartners from "../partnerpage/OtherPartners";
import CallToAction from "../shared/Cta";
import Footer from "../shared/Footer";

function Partners(){
    return(
        <main>
            <NavBar />
            <PartnerLanding />
            <StrategicTechnologyAlliance />
            <OtherPartners />
            <CallToAction />
            <Footer />
        </main>
    );
}

export default Partners