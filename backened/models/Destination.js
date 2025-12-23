import mongoose from "mongoose";
const { Schema, model } = mongoose;

/**
 * Embedded Activity Schema
 * Used for fine-grained itinerary planning
 */
const activitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["outdoor", "indoor", "cultural", "adventure"],
    },
    avgDurationHours: {
      type: Number,
      required: true,
      min: 0.5,
    },
    bestTimeOfDay: {
      type: String,
      enum: ["morning", "afternoon", "evening"],
      required: true,
    },
    weatherSensitive: {
      type: Boolean,
      default: false,
    },
    cost: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { _id: false } // prevents auto _id for embedded activities
);

/**
 * Destination Schema
 * Core entity used for filtering, scoring, and itinerary generation
 */
const destinationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["hill", "beach", "city", "spiritual", "nature"],
    },
    avgDailyCost: {
      type: Number,
      required: true,
      min: 0,
    },
    bestSeasons: {
      type: [String], // e.g. ["winter", "summer"]
      required: true,
    },
    idealTripDays: {
      type: Number,
      required: true,
      min: 1,
    },
    supportedMoods: {
      type: [String], // e.g. ["adventure", "relaxed"]
      required: true,
    },
    location: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },
    activities: {
      type: [activitySchema],
      default: [],
    },
  },
  { timestamps: true, versionKey: false }
);

const Destination = model("Destination", destinationSchema);
export default Destination;