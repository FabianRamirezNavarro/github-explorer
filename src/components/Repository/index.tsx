import React from "react";

import { useSelectedRepository } from "contexts/SelectedRepositoryContext";
import { LinkBox } from "components/LinkBox";

import { RepositoryProps } from "./types";

export function Repository({ repository }: RepositoryProps) {
  const { setSelectedRepository } = useSelectedRepository();

  const handleClick = () => {
    setSelectedRepository(repository);
  };

  const { full_name, description, owner, forks_count, updated_at } = repository;

  return (
    <LinkBox
      to={`/repositories?name=${full_name}`}
      title={full_name}
      description={description}
      onClick={handleClick}
      updated_at={updated_at}
      forks_count={forks_count}
    >
    </LinkBox>
  );
}
