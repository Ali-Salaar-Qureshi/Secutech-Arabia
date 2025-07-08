import NavBar from "../shared/Navbar";
import ContactLanding from "../contactpage/ContactLanding";
import ContactForm from "../contactpage/ContactForm";
import Footer from "../shared/Footer";

function ContactUs(){
    return(
        <main>
            <NavBar />
            <ContactLanding />
            <ContactForm />
            <Footer />
        </main>
    );
};

export default ContactUs