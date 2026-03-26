import { Data } from "../types/data.types";
import z, { success } from "zod";

export const validData = (data: Data) => {
  const dataTypes = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const result = dataTypes.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error,
    };
  } else
    return {
      success: true,
      data: result.data,
    };
};
