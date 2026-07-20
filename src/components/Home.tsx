import Files from "./main/Files";
import Searchbar from "./main/Searchbar";
import Folders from "./main/Folders";
import Shared from "./main/Shared";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Searchbar />
      <Folders />
      <Files />
      <Shared />
    </div>
  );
};

export default Home;
