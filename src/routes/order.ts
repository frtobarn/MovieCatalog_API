import { Router } from "express";
import { getOrders } from "../controllers/orders";
import { checkJwt } from "../middlewares/sessions";

const router = Router()

router.get("/", checkJwt ,getOrders )

export {router}