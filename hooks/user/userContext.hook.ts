import { useContext, useEffect } from "react";
import { UserContext } from "@/hooks/user/userContext";
import { useGetCurrentUserQuery, User } from "@/src/generated/graphql";

export default function useUserContext() {
    const context = useContext(UserContext);
    const { data, loading } = useGetCurrentUserQuery({});

    useEffect(() => {
        if (!loading) {
            if (!data) {
                console.log("No user found");
            } else {
                context.setUser(data.currentUser as User);
            }
        }
    }, [loading]);
}
