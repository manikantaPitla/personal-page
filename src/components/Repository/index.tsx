import { UiButton, UiHeading, UiPara } from "../ui";
import { ErrorContainer, LoadingContainer, RepoContainer } from "./styles";
import Repo from "../Repo";
import useFetchData from "../../hooks/useFetchData";
import { useNetworkStatus } from "../../hooks/useNetworkStatus";
import { RingLoader } from "../ui/Loaders";
import { getErrorMessage } from "../../constants";
import type { GitHubRepository } from "../../types/github";

interface RepositoryProps {
  repoUrl?: string | null;
}

const Repository = ({ repoUrl }: RepositoryProps) => {
  const { data: repos, loading, error, refetch } = useFetchData<GitHubRepository[]>(repoUrl ?? undefined);
  const isOnline = useNetworkStatus();
  const repositoryList = repos ?? [];

  return (
    <RepoContainer>
      <UiHeading>Repository</UiHeading>
      {loading ? (
        <LoadingContainer>
          <RingLoader />
        </LoadingContainer>
      ) : error ? (
        <ErrorContainer>
          <p>{getErrorMessage(error)}</p>
          {!isOnline && (
            <p style={{ color: "var(--status-error)", fontSize: "14px", marginTop: "10px" }}>
              📡 You appear to be offline. Please check your internet connection.
            </p>
          )}
          <UiButton
            onClick={() => {
              void refetch();
            }}
            disabled={!isOnline}
          >
            {isOnline ? "Retry" : "Retry (Offline)"}
          </UiButton>
        </ErrorContainer>
      ) : (
        <ul>
          {repositoryList.length > 0 ? (
            repositoryList.map((repo) => <Repo key={repo.id} repoData={repo} />)
          ) : (
            <UiPara>No repositories found</UiPara>
          )}
        </ul>
      )}
    </RepoContainer>
  );
};

export default Repository;
