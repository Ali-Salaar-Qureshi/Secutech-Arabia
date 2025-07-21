import NavBar from "../shared/Navbar";
import CaseStudyLanding from "../CaseStudies.jsx/CaseStudyLanding";
import CaseStudyBody from "../CaseStudies.jsx/CaseStudyBody";
import CallToAction from "../shared/Cta";
import Footer from "../shared/Footer";

function CaseStudies(){
    return(
        <main>
            <NavBar />
            <CaseStudyLanding />
            <CaseStudyBody />
            <CallToAction />
            <Footer />
        </main>
    );
};

export default CaseStudies