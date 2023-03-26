import { Punch } from "@/hooks/punch/punch.types";
import { useEffect, useState } from "react";
import { useGetPunchesQuery, usePunchSubscriptionSubscription } from "@/src/generated/graphql";

export function usePunches(afterDate: Date) {
    const [punches, setPunches] = useState<Punch[]>();

    const { data, loading } = useGetPunchesQuery({
        variables: {
            after: afterDate ? afterDate : undefined,
        },
    });

    const addPunchSubscriber = usePunchSubscriptionSubscription();

    useEffect(() => {
        if (!loading) {
            if (data) {
                const newPunches = data.punches.map((punch) => {
                    return {
                        id: punch.id,
                        siNumber: punch.si_number,
                        stationNumber: punch.station_number,
                        time: new Date(punch.time),
                        receiveTime: new Date(punch.receive_time),
                        seconds: punch.seconds,
                        competitionId: punch.competition_id,
                    };
                });
                setPunches(newPunches);
            }
        }
    }, [loading]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (punches && punches.length > 0) {
                setPunches([...punches].filter((punch) => punch.receiveTime > afterDate));
            }
        }, 15000);
        return () => clearInterval(interval);
    }, [punches]);

    useEffect(() => {
        if (addPunchSubscriber.data) {
            const punch = addPunchSubscriber.data.punchAdded;
            const newPunch = {
                id: punch.id,
                siNumber: punch.si_number,
                stationNumber: punch.station_number,
                time: new Date(punch.time),
                receiveTime: new Date(punch.receive_time),
                seconds: punch.seconds,
                competitionId: punch.competition_id,
            };
            if (punches) {
                setPunches([...punches, newPunch]);
            } else setPunches([newPunch]);
        }
    }, [addPunchSubscriber.data]);

    const getLatestDatePunch = () => {
        if (punches && punches.length > 0) {
            return punches.reduce((latest, punch) => {
                return punch.receiveTime > latest.receiveTime ? punch : latest;
            });
        }
    };

    return {
        punches,
        punchCount: punches !== undefined ? punches.length : undefined,
        latestDatePunch: getLatestDatePunch(),
    };
}
