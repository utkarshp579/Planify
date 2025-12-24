import mongoose from "mongoose";
import dotenv from "dotenv";
import Destination from "../models/Destination.js";

dotenv.config();

const seedDestinations = async () => {
    try {
      console.log(process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI);

    console.log("DB connected");

    // Clear old data
    await Destination.deleteMany();

    const destinations = [
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
            name: "Solang Valley Trek",
            type: "adventure",
            avgDurationHours: 3,
            bestTimeOfDay: "morning",
            weatherSensitive: true,
            cost: 500,
          },
          {
            name: "Hadimba Temple",
            type: "cultural",
            avgDurationHours: 1.5,
            bestTimeOfDay: "morning",
            weatherSensitive: false,
            cost: 100,
          },
          {
            name: "Mall Road Walk",
            type: "cultural",
            avgDurationHours: 2,
            bestTimeOfDay: "evening",
            weatherSensitive: false,
            cost: 0,
          },
        ],
      },

      {
        name: "Varanasi",
        category: "spiritual",
        avgDailyCost: 1800,
        bestSeasons: ["winter"],
        idealTripDays: 2,
        supportedMoods: ["spiritual", "exploration"],
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
            name: "Kashi Vishwanath Temple",
            type: "cultural",
            avgDurationHours: 1,
            bestTimeOfDay: "morning",
            weatherSensitive: false,
            cost: 0,
          },
        ],
      },

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
            name: "Baga Beach",
            type: "outdoor",
            avgDurationHours: 2.5,
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
    ];

    await Destination.insertMany(destinations);

    console.log("Seed data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedDestinations();
