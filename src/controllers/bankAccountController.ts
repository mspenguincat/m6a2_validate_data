import { NextFunction, Request, Response } from "express";
import BankAccount from "../models/bankAccountModel";

async function getBankAccounts() {
  return await BankAccount.find({});
}

export const getBankAccountsJSON = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bankAccounts = await getBankAccounts();
    res.json({ bankAccounts });
  } catch (err) {
    next(err);
  }
};

export const getBankAccountsWeb = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bankAccounts = await getBankAccounts();
    res.render("bankAccounts/index", { bankAccounts });
  } catch (err) {
    next(err);
  }
};

export const getBankAccountWeb = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bankAccount = await BankAccount.findById(req.params.id);
    if (!bankAccount) {
      res.status(404);
      return res.send("Bank Account not found");
    }
    res.render("bankAccounts/show", { bankAccount });
  } catch (err) {
    next(err);
  }
};

export const createBankAccountWeb = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { accountNumber, accountHolder, balance, email, status } = req.body;
    const bankAccount = new BankAccount({
      accountNumber,
      accountHolder,
      balance,
      email,
      status,
    });
    await bankAccount.save();
    res.redirect("/bankAccounts");
  } catch (err) {
    next(err);
  }
};

export const updateBankAccountWeb = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { accountNumber, accountHolder, balance, email, status } = req.body;
    const bankAccount = await BankAccount.findByIdAndUpdate(
      req.params.id,
      { accountNumber, accountHolder, balance, email, status },
      { new: true, runValidators: true }
    );
    if (!bankAccount) {
      return res.status(404).send("Bank Account not found");
    }
    res.redirect(`/bankAccounts/${bankAccount._id}`);
  } catch (err) {
    next(err);
  }
};

export const deleteBankAccountWeb = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bankAccount = await BankAccount.findByIdAndDelete(req.params.id);
    if (!bankAccount) {
      return res.status(404).send("Bank Account not found");
    }
    res.redirect("/bankAccounts");
  } catch (err) {
    next(err);
  }
};
export const getBankAccountJSON = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bankAccount = await BankAccount.findById(req.params.id);
    if (!bankAccount) {
      return res.status(404).send({ error: "Bank Account not found" });
    }
    res.send({ bankAccount });
  } catch (err) {
    next(err);
  }
};

export const createBankAccountJSON = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { accountNumber, accountHolder, balance, email, status } = req.body;
    const bankAccount = new BankAccount({
      accountNumber,
      accountHolder,
      balance,
      email,
      status,
    });
    await bankAccount.save();
    res.send({ bankAccount });
  } catch (err) {
    next(err);
  }
};

export const updateBankAccountJSON = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { accountNumber, accountHolder, balance, email, status } = req.body;
    const bankAccount = await BankAccount.findByIdAndUpdate(
      req.params.id,
      { accountNumber, accountHolder, balance, email, status },
      { new: true, runValidators: true }
    );
    if (!bankAccount) {
      return res.status(404).send({ error: "Bank Account not found" });
    }
    res.send({ bankAccount });
  } catch (err) {
    next(err);
  }
};

export const deleteBankAccountJSON = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bankAccount = await BankAccount.findByIdAndDelete(req.params.id);
    if (!bankAccount) {
      return res.status(404).send({ error: "Bank Account not found" });
    }
    res.send({ bankAccount });
  } catch (err) {
    next(err);
  }
};
export const editBankAccountWeb = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bankAccount = await BankAccount.findById(req.params.id);
    res.render("bankAccounts/edit", { bankAccount });
  } catch (err) {
    next(err);
  }
};
