import NavBar from "../shared/Navbar";
import BlogPage from "../News&Events/BlogPage";
import Footer from "../shared/Footer";

function NewsAndEvents(){
    return(
        <>
        <NavBar />
        <main>
            <BlogPage />
        </main>
        <Footer />
        </>
    );
};

export default NewsAndEvents