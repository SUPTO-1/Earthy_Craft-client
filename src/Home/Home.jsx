import ArtCategories from "../ArtCategory/ArtCategories";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import JuteCrafts from "./JuteCrafts";
import QuestionAndAnswer from "./QuestionAndAnswer";

const Home = () => {
    return (
        <div className="md:px-16">
            <Banner></Banner>
            <JuteCrafts></JuteCrafts>
            <ArtCategories></ArtCategories>
            <QuestionAndAnswer></QuestionAndAnswer>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;