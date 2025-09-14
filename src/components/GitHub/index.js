import React, { useState } from "react";
import { UiButton, UiHeading, UiSection } from "../../utils/uiMaterials";
import { ButtonWrapper, ErrorContainer, GitProfileWrapper, ProfileCard, ProfileWrapper } from "./style";
import { RingLoader } from "../../utils/uiComponents/Loaders";
import Repository from "../Repository";
import useFetchData from "../../hooks/useFetchData";
import { useNetworkStatus } from "../../hooks/useNetworkStatus";
import { PROFILE_DATA } from "../../constants/profileData";
import { SECTION_HEADINGS } from "../../constants/navigationConstants";
import { getErrorMessage } from "../../constants/errorMessages";

const GitHub = () => {
  const [repoVisible, setRepoVisible] = useState(false);
  const isOnline = useNetworkStatus();

  const { data: profile, loading, error, refetch } = useFetchData(PROFILE_DATA.github_url);

  return (
    <UiSection id="github">
      <UiHeading>
        <span>{SECTION_HEADINGS.github.split(".")[0]}. </span>
        GitHub
      </UiHeading>
      <GitProfileWrapper>
        {loading ? (
          <RingLoader />
        ) : error ? (
          <ErrorContainer>
            <p>{getErrorMessage(error)}</p>
            {!isOnline && <p style={{ color: "var(--status-error)", fontSize: "14px", marginTop: "10px" }}>📡 You appear to be offline. Please check your internet connection.</p>}
            <UiButton onClick={refetch} disabled={!isOnline}>
              {isOnline ? "Retry" : "Retry (Offline)"}
            </UiButton>
          </ErrorContainer>
        ) : (
          <ProfileWrapper>
            <ProfileCard>
              <img src={profile?.avatar_url} alt={profile?.name} title={profile?.name} loading="lazy" />
              <div>
                <h3>{profile?.name}</h3>
                <p>@{profile?.login}</p>
                <p>{profile?.bio}</p>
              </div>
            </ProfileCard>
            <ButtonWrapper>
              <a href={profile?.html_url} target="_blank" rel="noreferrer">
                <UiButton>Visit GitHub</UiButton>
              </a>
              <UiButton type="button" onClick={() => setRepoVisible((prev) => !prev)}>
                {repoVisible ? "Hide" : "Show"} Repos
              </UiButton>
            </ButtonWrapper>
          </ProfileWrapper>
        )}

        {repoVisible && <Repository repoUrl={profile?.repos_url} />}
      </GitProfileWrapper>
    </UiSection>
  );
};

export default GitHub;
