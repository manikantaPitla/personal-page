import React from "react";
import { UiButton, UiHeading, UiPara } from "../../utils/uiMaterials";
import { ErrorContainer, RepoContainer } from "./style";
import Repo from "../Repo";
import useFetchData from "../../hooks/useFetchData";
import { useNetworkStatus } from "../../hooks/useNetworkStatus";
import { RingLoader } from "../../utils/uiComponents/Loaders";
import { getErrorMessage } from "../../constants/errorMessages";

const Repository = ({ repoUrl }) => {
  const { data: repos, loading, error, refetch } = useFetchData(repoUrl);
  const isOnline = useNetworkStatus();

  return (
    <RepoContainer>
      <UiHeading>Repository</UiHeading>
      {loading ? (
        <RingLoader />
      ) : error ? (
        <ErrorContainer>
          <p>{getErrorMessage(error)}</p>
          {!isOnline && <p style={{ color: "#ff6b6b", fontSize: "14px", marginTop: "10px" }}>📡 You appear to be offline. Please check your internet connection.</p>}
          <UiButton onClick={refetch} disabled={!isOnline}>
            {isOnline ? "Retry" : "Retry (Offline)"}
          </UiButton>
        </ErrorContainer>
      ) : (
        <ul>{repos.length > 0 ? repos.map((repo) => <Repo key={repo.id} repoData={repo} />) : <UiPara>No repositories found</UiPara>}</ul>
      )}
    </RepoContainer>
  );
};

export default Repository;
