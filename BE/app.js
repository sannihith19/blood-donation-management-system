import express from "express";
import cors from "cors";

import donorRoutes from "./routes/donorRoutes.js";
import bloodBankRoutes from "./routes/bloodBankRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import bloodUnitRoutes from "./routes/bloodUnitRoutes.js";
import recipientRoutes from "./routes/recipientRoutes.js";
import bloodRequestRoutes from "./routes/bloodRequestRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", donorRoutes);
app.use("/", bloodBankRoutes);
app.use("/", eventRoutes);
app.use("/", bloodUnitRoutes);
app.use("/", recipientRoutes);
app.use("/", bloodRequestRoutes);

export default app;
