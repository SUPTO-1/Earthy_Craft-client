import { Helmet } from "react-helmet";
import ArtCategories from "../ArtCategory/ArtCategories";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import JuteCrafts from "./JuteCrafts";
import QuestionAndAnswer from "./QuestionAndAnswer";

const Home = () => {
    return (
        <div className="sm:px-2 md:px-16">
            <Helmet>
                <title>Earthy Craft</title>
            </Helmet>
            <Banner></Banner>
            <JuteCrafts></JuteCrafts>
            <ArtCategories></ArtCategories>
            <QuestionAndAnswer></QuestionAndAnswer>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;