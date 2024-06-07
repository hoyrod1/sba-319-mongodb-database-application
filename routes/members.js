const { Router } = require("express");
const memberCtrl = require("../controller/members.js");

const router = Router();

router.post("/", memberCtrl.createMember);

router.get("/", memberCtrl.getMembers);

router.get("/:id", memberCtrl.getSingleMember);

router.put("/:id", memberCtrl.updateMember);

// router.delete("/:id", usersCtrl.deleteUser);

module.exports = router;
