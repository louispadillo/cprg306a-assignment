"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(
    Array.isArray(itemsData) ? itemsData : []
  );

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #e3f2fd, #fce4ec)",
        padding: "25px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "30px",
            marginBottom: "30px",
            color: "#333",
          }}
        >
          🛒 Shopping List
        </h1>

        <NewItem onAddItem={handleAddItem} />

        <ItemList items={items} />
      </div>
    </main>
  );
}