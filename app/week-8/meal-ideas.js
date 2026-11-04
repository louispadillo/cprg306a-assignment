"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
      ingredient
    )}`
  );
  const data = await response.json();
  return data.meals ?? [];
}

// Optional Challenge 2: a second API call to retrieve a meal's ingredients
async function fetchMealIngredients(idMeal) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  const data = await response.json();
  const meal = data.meals?.[0];

  if (!meal) return [];

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push(
        `${measure && measure.trim() ? `${measure.trim()} ` : ""}${ingredient.trim()}`
      );
    }
  }

  return ingredients;
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loadedIngredient, setLoadedIngredient] = useState("");
  const [openMealId, setOpenMealId] = useState(null);
  const [ingredientsByMeal, setIngredientsByMeal] = useState({});

  // "Loading" is derived instead of stored so the effect never sets state
  // synchronously, which would trigger a cascading render.
  const loading = Boolean(ingredient) && ingredient !== loadedIngredient;

  useEffect(() => {
    let ignore = false;

    function loadMealIdeas() {
      const request = ingredient
        ? fetchMealIdeas(ingredient)
        : Promise.resolve([]);

      request
        .then((mealIdeas) => {
          if (ignore) return;

          setMeals(mealIdeas);
          setLoadedIngredient(ingredient);
          setOpenMealId(null);
          setIngredientsByMeal({});
        })
        .catch(() => {
          if (ignore) return;

          setMeals([]);
          setLoadedIngredient(ingredient);
        });
    }

    loadMealIdeas();

    return () => {
      ignore = true;
    };
  }, [ingredient]);

  async function toggleIngredients(idMeal) {
    if (openMealId === idMeal) {
      setOpenMealId(null);
      return;
    }

    setOpenMealId(idMeal);

    if (!ingredientsByMeal[idMeal]) {
      const ingredients = await fetchMealIngredients(idMeal);
      setIngredientsByMeal((previous) => ({
        ...previous,
        [idMeal]: ingredients,
      }));
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Meal Ideas</h2>

      {!ingredient && (
        <p className="mt-3 text-sm text-slate-600">
          Select an item from your shopping list to see meal ideas.
        </p>
      )}

      {ingredient && (
        <p className="mt-1 text-sm capitalize text-slate-600">
          Ideas using <span className="font-semibold">{ingredient}</span>
        </p>
      )}

      {loading && (
        <p className="mt-4 text-sm text-slate-500">Loading meal ideas…</p>
      )}

      {!loading && ingredient && meals.length === 0 && (
        <p className="mt-4 text-sm text-slate-500">
          No meal ideas found for {ingredient}.
        </p>
      )}

      {!loading && meals.length > 0 && (
        <ul className="mt-4 space-y-3">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="overflow-hidden rounded-lg border border-gray-200"
            >
              <button
                type="button"
                onClick={() => toggleIngredients(meal.idMeal)}
                className="flex w-full items-center gap-4 p-3 text-left hover:bg-gray-50"
              >
                <Image
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-md object-cover"
                />
                <span className="flex-1 text-sm font-semibold text-slate-900">
                  {meal.strMeal}
                </span>
                <span className="text-xs font-medium text-blue-700">
                  {openMealId === meal.idMeal ? "Hide ingredients" : "Ingredients"}
                </span>
              </button>

              {openMealId === meal.idMeal && (
                <div className="border-t border-gray-200 bg-gray-50 px-4 py-3">
                  {ingredientsByMeal[meal.idMeal] ? (
                    <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
                      {ingredientsByMeal[meal.idMeal].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-slate-500">
                      Loading ingredients…
                    </p>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
