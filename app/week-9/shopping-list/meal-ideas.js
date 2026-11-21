"use client";

import { useEffect, useState } from "react";

// fetch the meals that include the given ingredient from TheMealDB
async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        // the API returns null for meals when nothing matches
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    }

    // reload the meal ideas whenever the selected ingredient changes
    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        } else {
            setMeals([]);
        }
    }, [ingredient]);

    return (
        <div className="w-[500px] bg-white p-8 rounded-3xl border border-dark-600">
            <h2 className="text-2xl font-bold mb-4 tracking-tighter text-dark-900">Meal Ideas</h2>
            {!ingredient && (
                <p className="tracking-tighter text-dark-700">Select an item to see meal ideas.</p>
            )}
            {ingredient && meals.length === 0 && (
                <p className="tracking-tighter text-dark-700">No meal ideas found for {ingredient}.</p>
            )}
            {ingredient && meals.length > 0 && (
                <>
                    <p className="tracking-tighter text-dark-700 mb-4">Here are some meal ideas using {ingredient}:</p>
                    <ul className="flex flex-col gap-2">
                        {meals.map((meal) => (
                            <li key={meal.idMeal} className="flex flex-row items-center gap-3 border border-dark-600 rounded-2xl p-2 text-dark-900">
                                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-12 h-12 rounded-xl" />
                                <p className="font-semibold tracking-tighter">{meal.strMeal}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
