import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();

  // Extracting name and cost from the form state
  const { name, cost } = useSelector((state) => state.form);

  // Event handler for name change
  const handleNameChange = (event) => {
    const newName = event.target.value;
    dispatch(changeName(newName));
  };

  // Event handler for cost change
  const handleCostChange = (event) => {
    const newCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(newCost));
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
