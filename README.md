# Globomantics Product Catalog

Demo application for the **Building Development Workflows with Google Antigravity** course.

## Prerequisites

- Node.js 22+
- Google Antigravity 1.20+

## Setup

```bash
npm install
npm start
```

Open http://localhost:3000 to view the product catalog.

## Project Structure

```
globomantics-app/
├── server.js              # Express API server
├── public/
│   └── index.html         # Frontend product catalog
├── package.json
└── README.md
```

## API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | /api/products    | List all products        |
| GET    | /api/health      | Server health check      |
