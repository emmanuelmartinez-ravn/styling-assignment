import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="input-wrapper">
        <div className="search-icon"></div>
        <input type="text" className="search-input" placeholder="Search" />
      </div>
    </div>
  );
};

export default Searchbar;
