import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "請輸入有效的電郵地址" }),
  password: z.string().min(1, { message: "請輸入密碼" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "請輸入有效的電郵地址" }),
  password: z.string().min(8, { message: "至少8個字元，必須包含字母和數字" }),
  firstname: z.string().min(1, { message: "請輸入你的名字" }),
  lastname: z.string().min(1, { message: "請輸入你的姓氏" }),
});
