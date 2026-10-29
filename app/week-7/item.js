export default function Item({ item }) {
  return (
    <li>
      <strong>{item.name}</strong> ({item.quantity})
      <br />
      Category: {item.category}
    </li>
  );
}