import { UserContext } from "@/hooks/user/userContext";
import { useContext, useEffect, useState } from "react";

export default function useUsernameToken() {
    const userContext = useContext(UserContext);
    const [text, setText] = useState(userContext.user?.username || "");

    useEffect(() => {
        setText(userContext.user?.username || "");
    }, [userContext.user?.username]);

    const onMouseEnter = () => {
        setText(userContext.user?.token || "");
    };

    const onMouseLeave = () => {
        setText(userContext.user?.username || "");
    };

    const onClick = () => {
        navigator.clipboard
            .writeText(userContext.user?.token || "")
            .then(() => console.log("Copied token to clipboard"));
    };

    return {
        text,
        onMouseEnter,
        onMouseLeave,
        onClick,
    };
}
