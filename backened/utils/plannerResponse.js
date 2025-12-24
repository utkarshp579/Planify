/**
 * PlannerResponse
 * Final structured response sent to frontend
 */
export function buildPlannerResponse({
  recommendedDestinations,
  itinerary,
  explanations,
}) {
  return {
    recommendedDestinations,
    itinerary,
    explanations,
  };
}

/*
  recommendedDestinations Structure
  {
    destinationId: String,
    name: String,
    score: Number,
    scoreBreakdown: {
      moodScore: Number,
      budgetScore: Number,
      durationScore: Number,
      weatherScore: Number
    }
  }

  Itinerary Structure
  {
    destinationName: String,
    days: [
      {
        dayNumber: Number,
        activities: [
          {
            name: String,
            type: String,
            durationHours: Number,
            bestTimeOfDay: String
          }
        ],
        totalEstimatedTime: Number
      }
    ]
  }
*/
