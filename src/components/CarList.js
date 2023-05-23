import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const dispatch = useDispatch();

  // Extracting cars and name from the form and cars state using destructuring
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    // Filtering the cars based on the search term
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  // Event handler for car deletion
  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  // Rendering the list of cars
  const renderedCars = cars.map((car) => {
    // Checking if the car name matches the search name for bold styling
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
};

export default CarList;
