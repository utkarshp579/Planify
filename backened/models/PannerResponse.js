// later Move to utils

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
    recommendedDestinations, // array of scored destinations
    itinerary, // day-wise itinerary object
    explanations, // array of short text reasons
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
    seasonScore: Number,
    weatherScore: Number,
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
          durationHours: Number
        }
      ],
      totalEstimatedTime: Number
    }
  ]
}

*/