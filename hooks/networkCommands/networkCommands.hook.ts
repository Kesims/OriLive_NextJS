import { useEffect, useReducer } from "react";
import {
    NetworkCommand,
    useGetNetworkCommandsQuery,
    useNetworkCommandAddedSubscription,
    useNetworkCommandRemovedSubscription,
} from "@/src/generated/graphql";

type State = {
    networkCommands?: NetworkCommand[];
};

type Action =
    | { type: "setNetworkCommands"; payload: NetworkCommand[] }
    | { type: "addNetworkCommand"; payload: NetworkCommand }
    | { type: "removeNetworkCommand"; payload: NetworkCommand };

const initialState = {
    networkCommands: undefined,
};

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "setNetworkCommands":
            return { networkCommands: action.payload };
        case "addNetworkCommand":
            const newNetworkCommands = state.networkCommands
                ? [...state.networkCommands, action.payload]
                : [action.payload];
            return {
                ...state,
                networkCommands: newNetworkCommands,
            };
        case "removeNetworkCommand":
            const filteredNetworkCommands = state.networkCommands?.filter((m) => m.id !== action.payload.id);
            return {
                ...state,
                networkCommands: filteredNetworkCommands,
            };
        default:
            throw new Error();
    }
}

export function useNetworkCommands() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { data, loading } = useGetNetworkCommandsQuery();
    const networkCommandAdded = useNetworkCommandAddedSubscription();
    const networkCommandRemoved = useNetworkCommandRemovedSubscription();

    useEffect(() => {
        if (!loading) {
            if (data) {
                dispatch({ type: "setNetworkCommands", payload: data.networkCommands });
            }
        }
    }, [loading]);

    useEffect(() => {
        if (networkCommandAdded.data) {
            dispatch({ type: "addNetworkCommand", payload: networkCommandAdded.data.networkCommandAdded });
        }
    }, [networkCommandAdded.data]);

    useEffect(() => {
        if (networkCommandRemoved.data) {
            dispatch({
                type: "removeNetworkCommand",
                payload: networkCommandRemoved.data.networkCommandRemoved,
            });
        }
    }, [networkCommandRemoved.data]);

    const networkCommandCount =
        state.networkCommands !== undefined ? state.networkCommands.length : undefined;

    return { networkCommands: state.networkCommands, networkCommandCount };
}
