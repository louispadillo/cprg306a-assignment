"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(
    Array.isArray(itemsData) ? itemsData : []
  );

  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleItemSelect(item) {
    const cleanName = item.name
      .split(",")[0]
      .replace(/\p{Extended_Pictographic}/gu, "")
      .trim();

    setSelectedItemName(cleanName);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f3e8ff, #ffffff)",
        padding: "25px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1050px",
          backgroundColor: "white",
          padding: "35px",
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

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            alignItems: "flex-start",
          }}
        >
          <div style={{ flex: "1 1 300px", minWidth: "0" }}>
            <NewItem onAddItem={handleAddItem} />

            <ItemList
              items={items}
              onItemSelect={handleItemSelect}
            />
          </div>

          <div
            style={{
              flex: "1 1 300px",
              minWidth: "0",
              borderLeft: "1px solid #eee",
              paddingLeft: "20px",
            }}
          >
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}