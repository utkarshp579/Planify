# Planify 🌍✈️

A smart travel planning application that generates personalized destination recommendations and day-wise itineraries based on user preferences.

## Features

- 🎯 **Intent-based recommendations** - Get destinations matching your mood, budget, and travel style
- 📅 **Auto-generated itineraries** - Day-wise activity plans with time estimates
- 💰 **Budget-aware filtering** - Destinations filtered by your spending capacity
- 🌤️ **Seasonal awareness** - Recommendations consider best travel seasons
- 📊 **Transparent scoring** - See why each destination was recommended

## Tech Stack

### Backend

- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **RESTful API** architecture

### Frontend

- **React** with Vite
- **Vanilla CSS** for styling

## Project Structure

```
Planify/
├── backened/
│   ├── config/          # Database & feature flags
│   ├── controllers/     # Route handlers
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   │   └── recommendation/
│   │       ├── filterDestinations.js
│   │       ├── scoreDestinations.js
│   │       └── generateItinerary.js
│   ├── utils/           # Helper functions
│   └── scripts/         # Seed scripts
├── frontened/
│   └── src/
│       ├── App.jsx
│       └── services/
│           └── api.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB Atlas account or local MongoDB
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/planify.git
   cd planify
   ```

2. **Setup Backend**

   ```bash
   cd backened
   npm install
   ```

3. **Configure environment variables**

   Create `.env` in the `backened` folder:

   ```env
   PORT=4000
   MONGO_DB=planify
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/planify?retryWrites=true&w=majority
   ```

4. **Seed the database**

   ```bash
   node scripts/seedDestinations.js
   ```

5. **Start the backend**

   ```bash
   npm start
   ```

6. **Setup Frontend**
   ```bash
   cd ../frontened
   npm install
   npm run dev
   ```

## API Endpoints

### Generate Travel Plan

```http
POST /api/plan
Content-Type: application/json

{
  "mood": "adventure",
  "budgetRange": "medium",
  "days": 5,
  "groupType": "duo"
}
```

**Response:**

```json
{
  "recommendedDestinations": [
    {
      "destinationId": "...",
      "name": "Manali",
      "score": 85,
      "scoreBreakdown": {
        "moodScore": 40,
        "budgetScore": 20,
        "durationScore": 15,
        "weatherScore": 10
      }
    }
  ],
  "itinerary": {
    "destinationName": "Manali",
    "days": [
      {
        "dayNumber": 1,
        "activities": [...],
        "totalEstimatedTime": 6.5
      }
    ]
  },
  "explanations": [
    "Strong match for your adventure travel mood",
    "Within your budget range"
  ]
}
```

## System Flow

1. **User submits inputs** → Mood, budget, duration, group type
2. **Intent normalization** → Convert to system-friendly parameters
3. **Destination filtering** → Filter by feasibility constraints
4. **Scoring & ranking** → Score destinations by relevance
5. **Itinerary generation** → Create day-wise activity plan
6. **Response** → Return recommendations with explanations

## Available Moods

- `adventure` - Trekking, sports, outdoor activities
- `relaxed` - Beaches, resorts, leisure
- `spiritual` - Temples, pilgrimages, meditation
- `exploration` - Sightseeing, culture, history

## Budget Ranges

- `low` - Budget-friendly destinations
- `medium` - Mid-range options
- `high` - Premium experiences

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

Built with ❤️ for travelers
