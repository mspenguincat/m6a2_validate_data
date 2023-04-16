import express from "express";

import {
  createBankAccountWeb,
  getBankAccountsWeb,
  getBankAccountWeb,
  updateBankAccountWeb,
  deleteBankAccountWeb,
  editBankAccountWeb,
  getBankAccountsJSON,
  getBankAccountJSON,
  createBankAccountJSON,
  updateBankAccountJSON,
  deleteBankAccountJSON,
} from "../controllers/bankAccountController";
const router = express.Router();

// Web routes
router.get("/", getBankAccountsWeb);
router.get("/new", (req, res) => res.render("bankAccounts/new", {}));
router.post("/", createBankAccountWeb);
router.get("/:id", getBankAccountWeb);
router.get("/:id/edit", editBankAccountWeb);
router.put("/:id", updateBankAccountWeb);
router.delete("/:id", deleteBankAccountWeb);

// JSON routes
router.get("/api", getBankAccountsJSON);
router.get("/api/:id", getBankAccountJSON);
router.post("/api", createBankAccountJSON);
router.put("/api/:id", updateBankAccountJSON);
router.delete("/api/:id", deleteBankAccountJSON);

export default router;
