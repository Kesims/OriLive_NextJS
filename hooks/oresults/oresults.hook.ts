import { useEffect, useState } from "react";
import {
    OResultsMapping,
    useGetOResultsMappingsQuery,
    useOresultsMappingAddedSubscription,
    useOresultsMappingRemovedSubscription,
} from "@/src/generated/graphql";

export function useOResults() {
    const [mappings, setMappings] = useState<OResultsMapping[]>();

    const { data, loading } = useGetOResultsMappingsQuery();

    const mappingAdded = useOresultsMappingAddedSubscription();
    const mappingRemoved = useOresultsMappingRemovedSubscription();

    useEffect(() => {
        if (!loading) {
            if (data) {
                setMappings(data.oresultsMappings);
            }
        }
    }, [loading]);

    useEffect(() => {
        if (mappingAdded.data) {
            const mapping = mappingAdded.data.oresultsMappingAdded;
            if (mappings) {
                setMappings([...mappings, mapping]);
            } else setMappings([mapping]);
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

    return { mappings, mappingsCount };
}
