import { deleteCookie } from "cookies-next";
import { urlConf } from "@/src/urlConf";
import { useSnackbar } from "notistack";
import { useLogutMutationMutation } from "@/src/generated/graphql";
import { useRouter } from "next/navigation";

export function useHandleLogout() {
    const [logout] = useLogutMutationMutation();
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();
    return async () => {
        try {
            await logout();
            deleteCookie("connect.sid", { path: "/" });
            router.push(urlConf.homepage);
        } catch (e) {
            enqueueSnackbar("Odhlášení se nezdařilo!", { variant: "error" });
        }
    };
}
