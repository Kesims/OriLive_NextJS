import { useEffect, useState } from "react";
import {
    OResultsMapping,
    useGetOResultsMappingsQuery,
    useOresultsMappingAddedSubscription,
    useOresultsMappingRemovedSubscription,
    useRemoveOresultsMappingMutation,
} from "@/src/generated/graphql";
import { useSnackbar } from "notistack";

export function useOResults() {
    const [mappings, setMappings] = useState<OResultsMapping[]>();

    const { data, loading } = useGetOResultsMappingsQuery();

    const mappingAdded = useOresultsMappingAddedSubscription();
    const mappingRemoved = useOresultsMappingRemovedSubscription();

    const { enqueueSnackbar } = useSnackbar();

    const [removeMapping, removeNodeStatus] = useRemoveOresultsMappingMutation({
        onCompleted: () => console.log("Login successful."),
    });

    useEffect(() => {
        if (!loading) {
            if (data) {
                setMappings(data.oresultsMappings as OResultsMapping[]);
            }
        }
    }, [loading]);

    useEffect(() => {
        if (mappingAdded.data) {
            const mapping = mappingAdded.data.oresultsMappingAdded;
            if (mappings) {
                setMappings([...mappings, mapping] as OResultsMapping[]);
            } else {
                setMappings([mapping] as OResultsMapping[]);
            }
        }
    }, [mappingAdded.data]);

    useEffect(() => {
        if (mappingRemoved.data) {
            const mapping = mappingRemoved.data.oresultsMappingRemoved;
            if (mappings) {
                setMappings([...mappings].filter((m) => m.id != mapping.id));
            }
        }
    }, [mappingRemoved.data]);

    const mappingsCount = mappings !== undefined ? mappings.length : undefined;

    const removeMappingHandler = async (id: number) => {
        if (removeNodeStatus.loading) return;
        try {
            await removeMapping({
                variables: {
                    id: id,
                },
            });
            enqueueSnackbar("Mapování bylo zrušeno.", { variant: "success" });
            setMappings(mappings?.filter((m) => m.id != id));
            return true;
        } catch (e) {
            enqueueSnackbar("Při odebírání mapování došlo k neznámé chybě.", { variant: "error" });
        }
        return false;
    };

    return { mappings, mappingsCount, removeMapping: removeMappingHandler };
}
