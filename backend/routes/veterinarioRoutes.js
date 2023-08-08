import express from 'express';

const router = express.Router();

router.get("/" , (req , res) => {
    res.send("desde API/VETERINARIOS");
} )

router.get("/login" , (req , res) => {
    res.send("desde API/VETERINARIOS/LOGIN");
})

export default router;