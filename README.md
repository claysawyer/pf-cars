# pf-cars README

This project is a React application that manages a list of cars. It utilizes Redux and React Redux to handle state management.

This project demonstrates the use of React, Redux, and React Redux to build a car management application. It showcases the implementation of components, Redux slices, actions, reducers, and selectors. The advanced concepts and techniques used include component composition, state management with Redux, handling form inputs, filtering data based on search term, and dynamic rendering based on state changes.

## Table of Contents

- [Getting Started](#getting-started)
- [Components](#components)
- [Redux Configuration](#redux-configuration)
- [Form Slice](#form-slice)
- [Cars Slice](#cars-slice)

## Getting Started

To run the project, follow these steps:

1. Clone the repository.
2. Install the project dependencies using `npm install`.
3. Start the development server using `npm start`.

## Components

The application consists of the following components:

- **App**: The main component that serves as the entry point for the application. It renders other components responsible for managing car data.

- **CarForm**: A form component used for adding new cars to the list. It captures the name and cost of the car and dispatches an action to add the car to the store.

- **CarSearch**: This component provides a search functionality for filtering the list of cars based on the entered search term. It dispatches an action to update the search term in the store.

- **CarList**: Renders the list of cars filtered by the search term. It also provides a delete button for each car to remove it from the list. It utilizes Redux actions and selectors to retrieve and manipulate the data.

- **CarValue**: Displays the total cost of all cars based on the current search term. It uses the Redux selector to calculate the total cost dynamically.

## Redux Configuration

The project utilizes Redux for state management. It uses the `configureStore` function from `@reduxjs/toolkit` to create the Redux store.

The store configuration includes two reducers: `carsReducer` and `formReducer`. The `carsReducer` manages the car data and search term, while the `formReducer` handles the form inputs for adding a new car.

## Form Slice

The `formSlice` is a Redux slice created using the `createSlice` function from `@reduxjs/toolkit`. It manages the form state, including the name and cost fields.

The slice defines two actions: `changeName` and `changeCost`, which are used to update the corresponding fields in the state. It also includes an extra reducer case to reset the form fields when a new car is added using the `addCar` action from the `carsSlice`.

## Cars Slice

The `carsSlice` is another Redux slice created using the `createSlice` function. It handles the car data and search term in the state.

The slice defines three actions: `changeSearchTerm`, `addCar`, and `removeCar`. The `changeSearchTerm` action is dispatched by the `CarSearch` component to update the search term. The `addCar` action is dispatched by the `CarForm` component to add a new car to the list. The `removeCar` action is dispatched by the `CarList` component to remove a car from the list.

The `carsSlice` also includes an extra reducer case that is triggered when a new car is added using the `addCar` action. It resets the search term to an empty string and the car list to its initial state.
