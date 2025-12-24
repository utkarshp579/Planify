import Destination from "../models/Destination.js";

import filterDestinations from "../services/recommendation/filterDestinations.js";
import scoreDestinations from "../services/recommendation/scoreDestinations.js";
import generateItinerary from "../services/recommendation/generateItinerary.js";
import buildExplanations from "../utils/buildExplanations.js";
import { buildPlannerResponse } from "../utils/plannerResponse.js"; 

/**
 * POST /api/plan
 */

export const generateTravelPlan = async (req, res) => {
  try {
    const userInput = req.body;
    /* 1️⃣ Fetch all destinations */
    const destinations = await Destination.find();
    /* 2️⃣ Feasibility filtering */
    const feasibleDestinations = filterDestinations(userInput, destinations); // const { mood, budgetRange } = userInput;
    if (feasibleDestinations.length === 0) {
      return res.status(200).json(
        buildPlannerResponse({
          recommendedDestinations: [],
          itinerary: null,
          explanations: [
            "No destinations match your preferences. Try increasing budget or days.",
          ],
        })
      );
    }
    /* 3️⃣ Season detection (temporary) */
    const currentSeason = "winter"; // will make dynamic using web api , future scope
    /* 4️⃣ Scoring */
    const scoredDestinations = scoreDestinations(
      userInput,
      feasibleDestinations,
      currentSeason
    );

    /* 5️⃣ Pick top destination */
    const topDestination = feasibleDestinations.find(
      (d) => d.name === scoredDestinations[0].name
    );
    /* 6️⃣ Itinerary generation */
    const itinerary = generateItinerary(topDestination, userInput.days);
    /* 7️⃣ Explanation */
    const explanations = buildExplanations({
      scoredDestination: scoredDestinations[0],
      userInput,
      currentSeason,
    });
    /* 8️⃣ Final response */
    const response = buildPlannerResponse({
      recommendedDestinations: scoredDestinations,
      itinerary,
      explanations,
    });
    return res.status(200).json(response);
  } catch (error) {
    console.error("Planner error:", error);
    return res.status(500).json({
      message: "Failed to generate travel plan",
    });
  }
}