const MAX_SCORES = {
  mood: 40,
  budget: 25,
  duration: 20,
  weather: 15,
};
// Max could be 100

const BUDGET_LIMITS = {
  low: 5000,
  medium: 12000,
  high: 25000,
};

/**
 * Intelligence Layer
 * Ranks feasible destinations
 */

const scoredDestinations = (userInput, destinations, currentSeason) => {
    const { mood, budgetRange, days } = userInput;
    const budgetLimit = BUDGET_LIMITS[budgetRange];
    
    return destinations.map(dest => {
        /*--- Mood Score --*/
        const moodScore = dest.supportedMoods.includes(mood)
            ? MAX_SCORES.mood
            : MAX_SCORES.mood * 0.5;

        /* ------- Budget Score ---- */
        const totalCost = dest.avgDailyCost * days;
        const budgetRatio = totalCost / budgetLimit; // lower totalCost , lowerration , HighPoint

        let budgetScore = 0;
        if (budgetRatio <= 0.6) budgetScore = MAX_SCORES.budget;
        else if (budgetRatio <= 0.8) budgetScore = MAX_SCORES.budget * 0.7;
        else if (budgetRatio <= 1) budgetScore = MAX_SCORES.budget * 0.4;

        /* ---------------- Duration Score ---------------- */
        const diff = Math.abs(dest.idealTripDays - days);
        let durationScore = 0;
        if (diff === 0) durationScore = MAX_SCORES.duration;
        else if (diff === 1) durationScore = MAX_SCORES.duration * 0.7;
        else durationScore = MAX_SCORES.duration * 0.3;

        /* ---------------- Weather Score (Soft Penalty) ---------------- */
        let weatherScore = MAX_SCORES.weather;

        if (!dest.bestSeasons.includes(currentSeason)) {
            const hasWeatherSensitiveActivity = dest.activities.some(
                (act) => act.weatherSensitive // 1 line function.
            );

            if (hasWeatherSensitiveActivity) {
                weatherScore = MAX_SCORES.weather * 0.4;
            } else {
                weatherScore = MAX_SCORES.weather * 0.7;
            }
        }

        /* ---------------- Total ---------------- */
        const totalScore =
            moodScore + budgetScore + durationScore + weatherScore;
        return { // return statement for map function
            destinationId: dest._id,
            name: dest.name,
            score: Math.round(totalScore),
            scoreBreakdown: {
                moodScore: Math.round(moodScore),
                budgetScore: Math.round(budgetScore),
                durationScore: Math.round(durationScore),
                weatherScore: Math.round(weatherScore),
            },
        };
    })
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);

};

export default scoredDestinations; 

// future scope :- dynamic weights