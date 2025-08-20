import React, { useState } from "react";
import { Button } from "../components/ui/button";

const restaurantList = [
  {
    name: "ICC PUDU",
    types: ["rice", "noodle", "bread", "dessert"],
    cuisine: ["malay", "chinese", "indian", "mamak"],
    aircon: "no",
    hours: "6:00 AM – 2:00 PM",
    link: "https://share.google/S7FrY9loaq8fLyfr8",
    description: "All kinds of local Malaysian foods in a busy market setting. Great for breakfast or brunch.",
  },
  {
    name: "T.T Licious",
    types: ["noodle", "rice"],
    cuisine: ["chinese"],
    aircon: "yes",
    hours: "11:00 AM – 11:00 PM",
    link: "https://share.google/nSKo3dqPn6yBPhwbW",
    description: "Cozy Chinese restaurant with air-conditioning, offering rice and noodle-based meals.",
  },
  {
    name: "Restaurant Char Siew Yoong",
    types: ["rice"],
    cuisine: ["chinese"],
    aircon: "yes",
    hours: "10:30 AM – 4:30 PM",
    link: "https://share.google/PCyUm3RKrh3Ud7ik4",
    description: "Known for their delicious char siew (BBQ pork) rice in an air-conditioned setting.",
  },
  {
    name: "Restoran Aliff",
    types: ["rice", "bread", "dessert"],
    cuisine: ["mamak"],
    aircon: "no",
    hours: "24/7",
    link: "https://share.google/gddBuJoXryzpJTQpd",
    description: "Classic Mamak spot with tons of food options, open all day and night.",
  }
];

export default function Questionnaire() {
  const [answers, setAnswers] = useState({
    foodType: [],
    cuisine: [],
    aircon: [],
  });
  const [submittedAnswers, setSubmittedAnswers] = useState(null);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const toggleSelection = (question, value) => {
    setAnswers((prev) => {
      const current = prev[question];
      const isSelected = current.includes(value);
      const updated = isSelected
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [question]: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      answers.foodType.length === 0 ||
      answers.cuisine.length === 0 ||
      answers.aircon.length === 0
    ) {
      setError("Please select at least one option from each category (Food Type, Cuisine, and Air Conditioning).");
      return;
    }

    setError("");
    setSubmittedAnswers({ ...answers });

    const filtered = restaurantList.filter((restaurant) => {
      const matchType = answers.foodType.some(type => restaurant.types.includes(type));
      const matchCuisine = answers.cuisine.some(c => restaurant.cuisine.includes(c));
      const matchAircon = answers.aircon.includes(restaurant.aircon);
      return matchType && matchCuisine && matchAircon;
    });

    setResults(filtered);
  };

  const renderOptions = (question, options) => (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => {
        const isSelected = answers[question].includes(opt.value);
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => toggleSelection(question, opt.value)}
            className={`px-5 py-2 rounded-full border transition-all ${
              isSelected
                ? "bg-purple-700 text-white border-purple-700"
                : "bg-white text-purple-700 border-purple-300 hover:bg-purple-100"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-300 p-6 flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-lg shadow-2xl p-10 rounded-2xl max-w-3xl w-full space-y-8"
      >
        <h1 className="text-4xl font-bold text-center text-purple-800">🍽️ Restaurant Finder</h1>

        {/* Food Type */}
        <div>
          <h2 className="text-xl font-semibold mb-3">What are you feeling like eating?</h2>
          {renderOptions("foodType", [
            { label: "Rice", value: "rice" },
            { label: "Noodle", value: "noodle" },
            { label: "Bread", value: "bread" },
            { label: "Dessert", value: "dessert" },
          ])}
        </div>

        {/* Cuisine */}
        <div>
          <h2 className="text-xl font-semibold mb-3">What type of cuisine?</h2>
          {renderOptions("cuisine", [
            { label: "Malay", value: "malay" },
            { label: "Chinese", value: "chinese" },
            { label: "Indian", value: "indian" },
            { label: "Mamak", value: "mamak" },
          ])}
        </div>

        {/* Aircon */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Do you prefer air-conditioned places?</h2>
          {renderOptions("aircon", [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ])}
        </div>

        {/* Submit */}
        <div className="text-center pt-4">
          <Button
            type="submit"
            className="px-6 py-3 text-lg"
          >
            Show My Restaurants 🍜
          </Button>
        </div>

        {/* Error */}
        {error && (
          <div className="text-center text-red-600 font-medium pt-2">{error}</div>
        )}
      </form>

      {/* Results */}
      {submittedAnswers && (
        <div className="mt-10 w-full max-w-3xl">
          {results.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {results.map((rest, idx) => (
                <div key={idx} className="bg-white shadow-xl rounded-xl p-5">
                  <h3 className="text-xl font-bold text-purple-700 mb-2">{rest.name}</h3>
                  <p className="text-gray-600">{rest.description}</p>
                  <p className="text-sm mt-1"><strong>Hours:</strong> {rest.hours}</p>
                  <a
                    href={rest.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 underline mt-2 inline-block"
                  >
                    View on Google Maps
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center mt-8 text-red-600 font-semibold">
              No matching restaurants found 😢
            </div>
          )}
        </div>
      )}
    </div>
  );
}
