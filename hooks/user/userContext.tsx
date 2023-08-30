import React, { createContext } from "react";
import { User } from "@/src/generated/graphql";

export interface UserContextInterface {
    user: User | undefined;
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}
export const UserContext = createContext({} as UserContextInterface);
