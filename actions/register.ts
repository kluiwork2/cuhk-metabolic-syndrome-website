"use server";

import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import * as z from "zod";

import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "你輸入的電郵地址或密碼不正確" };
  }

  const { email, password, lastname, firstname } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 11);
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "此電郵地址已註冊，請使用不同的電郵地址" };
  }

  await db.user.create({
    data: {
      lastname,
      firstname,
      email,
      password: hashedPassword,
    },
  });

  //   const verificationToken = await generateVerificationToken(email);
  //   await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "成功創建帳號！" };
};
