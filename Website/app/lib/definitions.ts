import { z } from "zod";

// ----------------  Backend Types  ----------------------- 

export type JWTPayloadType = {
  id: string;
};


export const queryTypes = z.object({
    query: z.string()
})

// --------------------------------------------------------