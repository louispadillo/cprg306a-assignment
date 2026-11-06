"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch meal ideas");
  }

  const data = await response.json();

  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadMealIdeas() {
    if (!ingredient) {
      setMeals([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    } catch (err) {
      setError("Could not load meal ideas.");
      setMeals([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div
      style={{
        minWidth: "250px",
        maxWidth: "350px",
        padding: "15px",
      }}
    >
      <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>
        Meal Ideas
      </h2>

      {!ingredient && (
        <p>Click an item to see meal ideas.</p>
      )}

      {ingredient && (
        <p style={{ marginBottom: "15px" }}>
          Meals containing: <strong>{ingredient}</strong>
        </p>
      )}

      {loading && <p>Loading meal ideas...</p>}

      {error && <p>{error}</p>}

      {!loading && ingredient && meals.length === 0 && !error && (
        <p>No meal ideas found.</p>
      )}

      <div
        style={{
          maxHeight: "500px",
          overflowY: "auto",
          paddingRight: "8px",
        }}
      >
        <ul>
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              style={{
                marginBottom: "10px",
                padding: "10px",
                backgroundColor: "#f8f8f8",
                borderRadius: "10px",
              }}
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}