const BUDGET_LIMITS = {
  low: 5000,
  medium: 12000,
  high: 25000,
};

/**
 * Feasibility Layer
 * Removes destinations that are unfeasible.
 */
const filterDestinations = (userInput, destinations) => {
    const { mood, budgetRange , days} = userInput;
    const budgetLimit = BUDGET_LIMITS[budgetRange];

    return destinations.filter(dest => {
        // 1. Budget feasibility
        const totalCost = dest.avgDailyCost * days;
        if (totalCost > budgetLimit) return false;

        // 2. Trip duration fit 
        if (dest.idealTripDays > days) return false;

        // 3. Mood compatibility
        if (!dest.supportedMoods.includes(mood)) return false;

        return true;
    });
};


export default filterDestinations;

// future Scope :- Weighted filtering logic, adding more parameters