import React from "react";

import { useSelectedRepository } from "contexts/SelectedRepositoryContext";
import { useIssues } from "hooks/useIssues";
import BarChart from '../../../components/Chart/BarChart';

export function IssuesList() {
  const { selectedRepository } = useSelectedRepository();
  const { data } = useIssues(
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
