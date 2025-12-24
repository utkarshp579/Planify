import mongoose from "mongoose";
import dotenv from "dotenv";
import Destination from "../models/Destination.js";

dotenv.config();

const seedDestinations = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");

    await Destination.deleteMany();

    const destinations = [
      /* ---------- HILL ---------- */

      {
        name: "Manali",
        category: "hill",
        avgDailyCost: 2500,
        bestSeasons: ["summer", "winter"],
        idealTripDays: 4,
        supportedMoods: ["adventure", "relaxed"],
        location: { latitude: 32.2396, longitude: 77.1887 },
        activities: [
          {
            name: "Solang Trek",
            type: "adventure",
            avgDurationHours: 3,
            bestTimeOfDay: "morning",
            weatherSensitive: true,
            cost: 500,
          },
          {
            name: "Mall Road Walk",
            type: "cultural",
            avgDurationHours: 2,
            bestTimeOfDay: "evening",
            weatherSensitive: false,
            cost: 0,
          },
          {
            name: "Cafe Time",
            type: "indoor",
            avgDurationHours: 1.5,
            bestTimeOfDay: "evening",
            weatherSensitive: false,
            cost: 300,
          },
        ],
      },

      {
        name: "Ooty",
        category: "hill",
        avgDailyCost: 2300,
        bestSeasons: ["summer"],
        idealTripDays: 3,
        supportedMoods: ["relaxed"],
        location: { latitude: 11.4064, longitude: 76.6932 },
        activities: [
          {
            name: "Botanical Garden",
            type: "outdoor",
            avgDurationHours: 2,
            bestTimeOfDay: "morning",
            weatherSensitive: false,
            cost: 100,
          },
          {
            name: "Toy Train Ride",
            type: "cultural",
            avgDurationHours: 2,
            bestTimeOfDay: "afternoon",
            weatherSensitive: false,
            cost: 300,
          },
          {
            name: "Lake Walk",
            type: "outdoor",
            avgDurationHours: 1.5,
            bestTimeOfDay: "evening",
            weatherSensitive: false,
            cost: 0,
          },
        ],
      },

      {
        name: "Darjeeling",
        category: "hill",
        avgDailyCost: 2600,
        bestSeasons: ["spring"],
        idealTripDays: 4,
        supportedMoods: ["exploration", "relaxed"],
        location: { latitude: 27.036, longitude: 88.2627 },
        activities: [
          {
            name: "Tiger Hill Sunrise",
            type: "outdoor",
            avgDurationHours: 1,
            bestTimeOfDay: "morning",
            weatherSensitive: true,
            cost: 100,
          },
          {
            name: "Tea Estate Tour",
            type: "cultural",
            avgDurationHours: 2,
            bestTimeOfDay: "afternoon",
            weatherSensitive: false,
            cost: 200,
          },
          {
            name: "Mall Walk",
            type: "outdoor",
            avgDurationHours: 1.5,
            bestTimeOfDay: "evening",
            weatherSensitive: false,
            cost: 0,
          },
        ],
      },

      /* ---------- BEACH ---------- */

      {
        name: "Goa",
        category: "beach",
        avgDailyCost: 3500,
        bestSeasons: ["winter"],
        idealTripDays: 5,
        supportedMoods: ["relaxed", "adventure"],
        location: { latitude: 15.2993, longitude: 74.124 },
        activities: [
          {
            name: "Beach Time",
            type: "outdoor",
            avgDurationHours: 3,
            bestTimeOfDay: "morning",
            weatherSensitive: true,
            cost: 0,
          },
          {
            name: "Water Sports",
            type: "adventure",
            avgDurationHours: 3,
            bestTimeOfDay: "afternoon",
            weatherSensitive: true,
            cost: 1200,
          },
          {
            name: "Night Market",
            type: "cultural",
            avgDurationHours: 2,
            bestTimeOfDay: "evening",
            weatherSensitive: false,
            cost: 300,
          },
        ],
      },

      {
        name: "Gokarna",
        category: "beach",
        avgDailyCost: 2400,
        bestSeasons: ["winter"],
        idealTripDays: 3,
        supportedMoods: ["spiritual", "relaxed"],
        location: { latitude: 14.5479, longitude: 74.3188 },
        activities: [
          {
            name: "Om Beach Walk",
            type: "outdoor",
            avgDurationHours: 2,
            bestTimeOfDay: "morning",
            weatherSensitive: false,
            cost: 0,
          },
          {
            name: "Temple Visit",
            type: "cultural",
            avgDurationHours: 1.5,
            bestTimeOfDay: "morning",
            weatherSensitive: false,
            cost: 0,
          },
          {
            name: "Sunset View",
            type: "outdoor",
            avgDurationHours: 1,
            bestTimeOfDay: "evening",
            weatherSensitive: true,
            cost: 0,
          },
        ],
      },

      /* ---------- CITY ---------- */

      {
        name: "Jaipur",
        category: "city",
        avgDailyCost: 2200,
        bestSeasons: ["winter"],
        idealTripDays: 3,
        supportedMoods: ["exploration"],
        location: { latitude: 26.9124, longitude: 75.7873 },
        activities: [
          {
            name: "Amber Fort",
            type: "cultural",
            avgDurationHours: 2,
            bestTimeOfDay: "morning",
            weatherSensitive: false,
            cost: 200,
          },
          {
            name: "City Palace",
            type: "cultural",
            avgDurationHours: 1.5,
            bestTimeOfDay: "afternoon",
            weatherSensitive: false,
            cost: 150,
          },
          {
            name: "Bazaar Walk",
            type: "outdoor",
            avgDurationHours: 2,
            bestTimeOfDay: "evening",
            weatherSensitive: false,
            cost: 0,
          },
        ],
      },

      {
        name: "Chandigarh",
        category: "city",
        avgDailyCost: 2400,
        bestSeasons: ["winter"],
        idealTripDays: 2,
        supportedMoods: ["relaxed"],
        location: { latitude: 30.7333, longitude: 76.7794 },
        activities: [
          {
            name: "Rock Garden",
            type: "cultural",
            avgDurationHours: 1.5,
            bestTimeOfDay: "morning",
            weatherSensitive: false,
            cost: 0,
          },
          {
            name: "Lake Walk",
            type: "outdoor",
            avgDurationHours: 1.5,
            bestTimeOfDay: "evening",
            weatherSensitive: false,
            cost: 0,
          },
          {
            name: "Cafe Visit",
            type: "indoor",
            avgDurationHours: 2,
            bestTimeOfDay: "evening",
            weatherSensitive: false,
            cost: 400,
          },
        ],
      },

      /* ---------- SPIRITUAL ---------- */

      {
        name: "Varanasi",
        category: "spiritual",
        avgDailyCost: 1800,
        bestSeasons: ["winter"],
        idealTripDays: 2,
        supportedMoods: ["spiritual"],
        location: { latitude: 25.3176, longitude: 82.9739 },
        activities: [
          {
            name: "Ganga Aarti",
            type: "cultural",
            avgDurationHours: 1,
            bestTimeOfDay: "evening",
            weatherSensitive: false,
            cost: 0,
          },
          {
            name: "Boat Ride",
            type: "outdoor",
            avgDurationHours: 1.5,
            bestTimeOfDay: "morning",
            weatherSensitive: true,
            cost: 300,
          },
          {
            name: "Temple Visit",
            type: "cultural",
            avgDurationHours: 1,
            bestTimeOfDay: "morning",
            weatherSensitive: false,
            cost: 0,
          },
        ],
      },

      {
        name: "Amritsar",
        category: "spiritual",
        avgDailyCost: 2000,
        bestSeasons: ["winter"],
        idealTripDays: 2,
        supportedMoods: ["spiritual", "exploration"],
        location: { latitude: 31.634, longitude: 74.8723 },
        activities: [
          {
            name: "Golden Temple",
            type: "cultural",
            avgDurationHours: 2,
            bestTimeOfDay: "morning",
            weatherSensitive: false,
            cost: 0,
          },
          {
            name: "Wagah Border",
            type: "outdoor",
            avgDurationHours: 1.5,
            bestTimeOfDay: "evening",
            weatherSensitive: false,
            cost: 0,
          },
          {
            name: "Langar Seva",
            type: "indoor",
            avgDurationHours: 1,
            bestTimeOfDay: "afternoon",
            weatherSensitive: false,
            cost: 0,
          },
        ],
      },

      /* ---------- NATURE ---------- */

      {
        name: "Coorg",
        category: "nature",
        avgDailyCost: 2600,
        bestSeasons: ["winter"],
        idealTripDays: 4,
        supportedMoods: ["relaxed"],
        location: { latitude: 12.3375, longitude: 75.8069 },
        activities: [
          {
            name: "Coffee Estate Walk",
            type: "outdoor",
            avgDurationHours: 2,
            bestTimeOfDay: "morning",
            weatherSensitive: false,
            cost: 0,
          },
          {
            name: "Waterfall Visit",
            type: "outdoor",
            avgDurationHours: 2,
            bestTimeOfDay: "afternoon",
            weatherSensitive: true,
            cost: 0,
          },
          {
            name: "Homestay Relax",
            type: "indoor",
            avgDurationHours: 2,
            bestTimeOfDay: "evening",
            weatherSensitive: false,
            cost: 500,
          },
        ],
      },
    ];

    await Destination.insertMany(destinations);
    console.log("Seeded successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDestinations();
