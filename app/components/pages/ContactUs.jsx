import NavBar from "../shared/Navbar";
import ContactLanding from "../contactpage/ContactLanding";
import ContactSection from "../contactpage/ContactSection";
import Footer from "../shared/Footer";

function ContactUs(){
    return(
        <main className="">
            <NavBar />
            <ContactLanding />
            <ContactSection />
            <Footer />
        </main>
    );
};

export default ContactUs