import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const CarSearch = () => {
  const dispatch = useDispatch();

  // Extracting the search term from the cars state
  const searchTerm = useSelector((state) => state.cars.searchTerm);

  // Event handler for search term change
  const handleSearchTermChange = (event) => {
    const newSearchTerm = event.target.value;
    dispatch(changeSearchTerm(newSearchTerm));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
};

export default CarSearch;
