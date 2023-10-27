
import React from "react";
import { usePullRequests } from "hooks/usePullRequests";
import { useSelectedRepository } from "contexts/SelectedRepositoryContext";
import BarChart from '../../../components/Chart/BarChart';

export function PullRequestsList() {
  const { selectedRepository } = useSelectedRepository();
  const { data } = usePullRequests(
    selectedRepository?.full_name ?? "",
  );

  const dataChart = [
    { year: 1980, efficiency: data?.length, sales: data?.length },
  ]


  return (
    <>
      <BarChart data={dataChart} />
    </>
  );
}
