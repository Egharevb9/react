import { Link } from 'react-router-dom';
const categories = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
function Menu() {
  return (
    <div>
      <h2>Food Categories</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat}>
            <Link to={`/menu/${cat.toLowerCase()}`}>{cat}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Menu;
