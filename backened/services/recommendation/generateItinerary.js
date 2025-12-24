// Logic --> Notes.txt

/**
 * Execution Layer
 * Builds day-wise itinerary
 */
const generateItinerary = (destination, userDays) => {
  const MAX_HOURS_PER_DAY = 8;

  // If no activities, return empty days
  if (!destination.activities || destination.activities.length === 0) {
    return {
      destinationName: destination.name,
      days: [],
    };
  }
  
  const days = [];
  let currentDay = 1;
  let currentDayHours = 0;
  let currentActivities = [];

  destination.activities.forEach((activity) => {
    // FOR EACH ACTIVITY , WE ARE Saving in either in current day , or next day if full
    // If current day is full, SAVE IT ,MOVE TO NEXT DAY
    if (
      currentDayHours + activity.avgDurationHours > MAX_HOURS_PER_DAY &&
      currentDay < userDays
    ) {
      days.push({
        dayNumber: currentDay,
        activities: currentActivities,
        totalEstimatedTime: currentDayHours,
      });

      currentDay++;
      currentDayHours = 0;
      currentActivities = [];
    }

    // Add activity
    currentActivities.push({
      name: activity.name,
      type: activity.type,
      durationHours: activity.avgDurationHours,
      bestTimeOfDay: activity.bestTimeOfDay,
    });

    currentDayHours += activity.avgDurationHours;
  });

  // Push last day
  if (currentActivities.length > 0) {
    days.push({
      dayNumber: currentDay,
      activities: currentActivities,
      totalEstimatedTime: currentDayHours,
    });
  }

  return {
    destinationName: destination.name,
    days,
  };
};

export default generateItinerary;




// Future Score :- reordering Activites , based on time slot. 