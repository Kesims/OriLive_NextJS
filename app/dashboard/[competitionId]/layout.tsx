"use client";
import React from "react";
import useCompetitionId from "@/hooks/competitionId/competitionId.hook";

export default function DashboardWithIDLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { competitionId: string };
}) {
    useCompetitionId(params.competitionId);
    return <div>{children}</div>;
}
