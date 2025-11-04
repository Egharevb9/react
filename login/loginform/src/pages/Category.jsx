import { useParams, Link } from 'react-router-dom';
const dishes = {
  breakfast: ['Moi Moi', 'Akara', 'Pap'],
  lunch: ['Jollof Rice', 'Egusi Soup', 'Pounded Yam'],
  dinner: ['Fried Rice', 'Ogbono Soup', 'Amala'],
  snacks: ['Puff Puff', 'Chin Chin', 'Meat Pie']
};
function CategoryPage() {
  const { category } = useParams();
  const meals = dishes[category] || [];
  return (
    <div>
      <h2>{category.toUpperCase()} Dishes</h2>
      <ul>
        {meals.map((meal, index) => <li key={index}>{meal}</li>)}
      </ul>
      <Link to="/menu">Back to Menu</Link>
    </div>
  );
}
export default CategoryPage;