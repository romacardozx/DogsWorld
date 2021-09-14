import { render, screen } from '@testing-library/react';
import App from './App';
import store from './store/index'
import FilterSort from './components/filtersort/FilterSort';
import Breed from '../../client/src/views/breed/Breed';

const doggyfront = {
    
  name: "Diego",
  height:100,
  weight:100,
}
describe("Order dogs By Name ASC and DESC", () => {
it("It has one element to order from A to Z called AZ and from Z to A ZA", () => {
  render(
    <Provider store={store}>
      <Router>
        <Filter />
      </Router>
    </Provider>
  );
  const asc = screen.getByText("A-Z");
  const desc = screen.getByText("Z-A");
  expect(asc).toBeInTheDocument();
  expect(desc).toBeInTheDocument();
});
it("Cards component shows pokemons info", () => {
  render(
    <Provider store={store}>
      <Router>
      <Breed  name={doggyfront.name} height={doggyfront.height} weight={doggyfront.weight} />
      </Router>
    </Provider>
  );
  const Name = screen.getByText("Diego")
  expect(Name).toBeInTheDocument();
})
});