/**
 * Explainability Layer
 * Builds human-readable reasons for recommendation
 */
const buildExplanations = ({ scoredDestination, userInput, currentSeason }) => {
  const explanations = [];
  const { scoreBreakdown } = scoredDestination;
  const { mood, budgetRange, days } = userInput;

  /* Mood */
  if (scoreBreakdown.moodScore >= 35) {
    explanations.push(`Strong match for your ${mood} travel mood`);
  } else {
    explanations.push(`Partially matches your ${mood} mood preference`);
  }

  /* Budget */
  if (scoreBreakdown.budgetScore >= 20) {
    explanations.push(`Comfortable within your ${budgetRange} budget`);
  } else {
    explanations.push(`Close to your ${budgetRange} budget limit`);
  }

  /* Duration */
  if (scoreBreakdown.durationScore >= 18) {
    explanations.push(`Ideal for a ${days}-day trip`);
  } else {
    explanations.push(`Trip duration is manageable for ${days} days`);
  }

  /* Weather */
  if (scoreBreakdown.weatherScore >= 12) {
    explanations.push(`Good seasonal conditions for travel`);
  } else {
    explanations.push(
      `Some activities may be weather-affected during ${currentSeason}`
    );
  }

  return explanations;
};

export default buildExplanations;
