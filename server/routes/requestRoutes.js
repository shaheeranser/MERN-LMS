const express = require("express")
const router = express.Router()

//controllers
const {
    makeRequest,
    getRequest,
    getAllRequests,
    approveRequest,
    denyRequest
} = require("../controllers/requestController")

//route protection
const {
   protect,
   adminOnly,
   memberOnly 
} = require("../middleware/authMiddleware")

router.post("/",protect, memberOnly, makeRequest)
router.get("/",protect, adminOnly, getAllRequests)
router.get("/:id",protect, adminOnly, getRequest)
router.put("/:id/approve",protect, adminOnly, approveRequest)
router.delete("/:id/deny",protect, adminOnly, denyRequest)

module.exports = router