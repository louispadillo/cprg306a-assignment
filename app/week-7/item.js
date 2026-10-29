export default function Item({ item }) {
  return (
    <li
      style={{
        backgroundColor: "#f8f8f8",
        padding: "10px 15px",
        marginBottom: "8px",
        borderRadius: "15px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {item.name} ({item.quantity})
      </div>

      <div
        style={{
          color: "#666",
          fontSize: "14px",
          marginTop: "3px",
        }}
      >
        {item.category}
      </div>
    </li>
  );
}