import "dotenv/config";
import express from "express";
import cors from "cors";
import inventoryRoutes from "./routes/inventoryRoutes";
import sequelize from "./config/database";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/inventory", inventoryRoutes);

const start = async () => {
  try {
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => {
      console.log(`Excess server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
