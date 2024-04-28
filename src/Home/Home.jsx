import ArtCategories from "../ArtCategory/ArtCategories";
import Banner from "./Banner";
import JuteCrafts from "./JuteCrafts";
import QuestionAndAnswer from "./QuestionAndAnswer";

const Home = () => {
    return (
        <div className="px-16">
            <Banner></Banner>
            <JuteCrafts></JuteCrafts>
            <ArtCategories></ArtCategories>
            <QuestionAndAnswer></QuestionAndAnswer>
        </div>
    );
};

export default Home;