import { useState } from "react";
import { generatePlan } from "./services/api";

function App() {
  const [form, setForm] = useState({
    mood: "relaxed",
    budgetRange: "medium",
    days: 3,
    groupType: "duo",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "days" ? Number(value) : value,
    }));
  };

  const handleSubmit = async () => {
    if (form.days < 1 || form.days > 30) {
      setError("Days must be between 1 and 30");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await generatePlan(form);
      setResult(data);
    } catch (err) {
      setError("Failed to generate plan");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Travel Planner</h2>

      {/* Mood */}
      <label>Mood:</label>
      <select name="mood" value={form.mood} onChange={handleChange}>
        <option value="adventure">Adventure</option>
        <option value="relaxed">Relaxed</option>
        <option value="spiritual">Spiritual</option>
        <option value="exploration">Exploration</option>
      </select>
      <br />

      {/* Budget */}
      <label>Budget:</label>
      <select
        name="budgetRange"
        value={form.budgetRange}
        onChange={handleChange}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <br />

      {/* Days */}
      <label>Days:</label>
      <input
        type="number"
        name="days"
        min="1"
        max="30"
        value={form.days}
        onChange={handleChange}
      />
      <br />

      {/* Group */}
      <label>Group Type:</label>
      <select name="groupType" value={form.groupType} onChange={handleChange}>
        <option value="solo">Solo</option>
        <option value="duo">Duo</option>
        <option value="family">Family</option>
        <option value="friends">Friends</option>
      </select>
      <br />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Generating..." : "Generate Plan"}
      </button>

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Result - ✅ Added better checks */}
      {result && (
        <>
          {result.recommendedDestinations &&
          result.recommendedDestinations.length > 0 ? (
            <>
              <h3>Top Destination</h3>
              <p>
                <strong>{result.recommendedDestinations[0].name}</strong>
              </p>
              <p>Score: {result.recommendedDestinations[0].score}</p>

              <h3>Why this destination?</h3>
              <ul>
                {result.explanations &&
                  result.explanations.map((e, i) => <li key={i}>{e}</li>)}
              </ul>

              <h3>Itinerary - {result.itinerary?.destinationName}</h3>
              {result.itinerary?.days &&
                result.itinerary.days.map((day) => (
                  <div key={day.dayNumber} style={{ marginBottom: "15px" }}>
                    <strong>Day {day.dayNumber}</strong>
                    <ul>
                      {day.activities &&
                        day.activities.map((a, i) => (
                          <li key={i}>
                            {a.name} ({a.bestTimeOfDay}) - {a.durationHours}h
                          </li>
                        ))}
                    </ul>
                    <em>Total: {day.totalEstimatedTime}h</em>
                  </div>
                ))}
            </>
          ) : (
            <p>No destinations found. Try different options.</p>
          )}
        </>
      )}

      {/* {result?.recommendedDestinations?.length === 0 && (
        <p>No destinations found. Try changing your inputs.</p>
      )} */}
    </div>
  );
}

export default App;

/*
Result :- Structure
{
    "recommendedDestinations": [
        {
            "destinationId": "694bb5231c466ed2eae3185f",
            "name": "Varanasi",
            "score": 75,
            "scoreBreakdown": {
                "moodScore": 40,
                "budgetScore": 0,
                "durationScore": 20,
                "weatherScore": 15
            }
        }
    ],
    "itinerary": {
        "destinationName": "Varanasi",
        "days": [
            {
                "dayNumber": 1,
                "activities": [
                    {
                        "name": "Ganga Aarti",
                        "type": "cultural",
                        "durationHours": 1,
                        "bestTimeOfDay": "evening"
                    },
                    {
                        "name": "Boat Ride",
                        "type": "outdoor",
                        "durationHours": 1.5,
                        "bestTimeOfDay": "morning"
                    },
                    {
                        "name": "Kashi Vishwanath Temple",
                        "type": "cultural",
                        "durationHours": 1,
                        "bestTimeOfDay": "morning"
                    }
                ],
                "totalEstimatedTime": 3.5
            }
        ]
    },
    "explanations": [
        "Strong match for your spiritual travel mood",
        "Close to your 1000 budget limit",
        "Ideal for a 2-day trip",
        "Good seasonal conditions for travel"
    ]
}

*/
