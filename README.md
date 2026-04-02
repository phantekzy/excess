### Nkrn
 Enterprise Resource Planning (ERP)
### The structure i should create inchalah :
```
Nkrn/
├── backend/
│   ├── src/
│   │   ├── config/             # Database and environment configs
│   │   ├── controllers/        # Request logic
│   │   ├── middleware/         # Auth and validation
│   │   ├── models/             # Sequelize or TypeORM schemas
│   │   ├── routes/             # API endpoints
│   │   ├── services/           # Business logic (ERP modules)
│   │   └── index.ts            # Entry point
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── api/                # Axios instances
│   │   ├── components/         # Shared UI components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── pages/              # Dashboard, Inventory, etc.
│   │   ├── store/              # Redux or Zustand state
│   │   └── App.tsx
│   ├── tailwind.config.js
│   └── package.json
└── docker-compose.yml
```
