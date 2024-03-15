import DogCard from "../Components/DogCard";
import SeachBar from "../Components/SearchBar";

const Home = () => {
  return (
    <div>
      <SeachBar></SeachBar>
      <div className="main-container">
        <DogCard />
      </div>
    </div>
  );
};

export default Home;