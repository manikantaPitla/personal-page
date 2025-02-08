import React from "react";
import { UiButton, UiHeading, UiPara } from "../../utils/uiMaterials";
import { ErrorContainer, RepoContainer } from "./style";
import Repo from "../Repo";
import useFetchData from "../../hooks/useFetchData";
import { RingLoader } from "../../utils/uiComponents/Loaders";

const Repository = ({ repoUrl }) => {
  console.log("Repository URL:", repoUrl);
  const { data: repos, loading, error, refetch } = useFetchData(repoUrl);
  console.log("repo", repos);
  return (
    <RepoContainer>
      <UiHeading>Repository</UiHeading>
      {loading ? (
        <RingLoader />
      ) : error ? (
        <ErrorContainer>
          <p>{error}</p>
          <UiButton onClick={refetch}>Retry</UiButton>
        </ErrorContainer>
      ) : (
        <ul>
          {repos.length > 0 ? (
            repos.map((repo) => <Repo key={repo.id} repoData={repo} />)
          ) : (
            <UiPara>No repositories found</UiPara>
          )}
        </ul>
      )}
    </RepoContainer>
  );
};

export default Repository;
