import { useState } from "react";
import { generatePlan } from "./services/api";

function App() {
  const [form, setForm] = useState({
    mood: "spiritual",
    budgetRange: "medium",
    days: 3,
    groupType: "duo",
  });

  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const data = await generatePlan(form);
    setResult(data);
  };

  return (
    <div>
      <h2>Travel Planner</h2>

      <button onClick={handleSubmit}>Generate Plan</button>

      {result && (
        <>
          <h3>Top Destination</h3>
          <p>{result.recommendedDestinations[0]?.name}</p>

          <h3>Why this destination?</h3>
          <ul>
            {result.explanations.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>

          <h3>Itinerary</h3>
          {result.itinerary.days.map((day) => (
            <div key={day.dayNumber}>
              <strong>Day {day.dayNumber}</strong>
              <ul>
                {day.activities.map((a, i) => (
                  <li key={i}>
                    {a.name} ({a.bestTimeOfDay})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
