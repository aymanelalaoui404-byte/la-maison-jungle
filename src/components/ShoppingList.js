import { plantList } from '../datas/plantList';
import CareScale from './CareScale';

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category)
        ? acc
        : acc.concat(plant.category),
    []
  );

  return (
    <main>
      <ul className="categories">
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>

      <ul className="plant-list">
        {plantList.map((plant) => (
          <li key={plant.id} className="plant-card">
            <div>{plant.name}</div>

            {plant.isBestSale && <div>🔥</div>}

            <CareScale
              careType="water"
              scaleValue={plant.water}
            />

            <CareScale
              careType="light"
              scaleValue={plant.light}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ShoppingList;