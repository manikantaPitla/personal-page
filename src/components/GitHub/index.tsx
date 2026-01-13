import { useState } from "react";
import { UiButton, UiHeading, UiSection } from "../ui";
import { ButtonWrapper, ErrorContainer, ErrorMessage, GitProfileWrapper, ProfileCard, ProfileWrapper } from "./styles";
import { RingLoader } from "../ui/Loaders";
import Repository from "../Repository";
import useFetchData from "../../hooks/useFetchData";
import { useNetworkStatus } from "../../hooks/useNetworkStatus";
import { PROFILE_DATA, SECTION_HEADINGS, ERROR_MESSAGES, getErrorMessage } from "../../constants";
import type { GitHubProfile } from "../../types/github";

const GitHub = () => {
  const [repoVisible, setRepoVisible] = useState<boolean>(false);
  const isOnline = useNetworkStatus();

  const { data: profile, loading, error, refetch } = useFetchData<GitHubProfile>(PROFILE_DATA.githubUrl);
  const fallbackProfileUrl = PROFILE_DATA.contact.find((contact) => contact.name === "Github")?.url ?? "#";
  const profileImage = profile?.avatar_url ?? PROFILE_DATA.about.profileUrl;
  const profileName = profile?.name ?? PROFILE_DATA.name;
  const profileLogin = profile?.login ?? PROFILE_DATA.initials;
  const profileBio = profile?.bio ?? "GitHub profile";

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
            {!isOnline && (
              <ErrorMessage>📡 You appear to be offline. Please check your internet connection.</ErrorMessage>
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
        ) : profile ? (
          <ProfileWrapper>
            <ProfileCard>
              <img src={profileImage} alt={profileName} title={profileName} loading="lazy" />
              <div>
                <h3>{profileName}</h3>
                <p>@{profileLogin}</p>
                <p>{profileBio}</p>
              </div>
            </ProfileCard>
            <ButtonWrapper>
              <a href={profile.html_url ?? fallbackProfileUrl} target="_blank" rel="noreferrer">
                <UiButton>Visit GitHub</UiButton>
              </a>
              <UiButton type="button" onClick={() => setRepoVisible((prev) => !prev)}>
                {repoVisible ? "Hide" : "Show"} Repos
              </UiButton>
            </ButtonWrapper>
          </ProfileWrapper>
        ) : (
          <ErrorContainer>
            <p>{ERROR_MESSAGES.GENERIC_ERROR}</p>
            <UiButton
              onClick={() => {
                void refetch();
              }}
              disabled={!isOnline}
            >
              Retry
            </UiButton>
          </ErrorContainer>
        )}

        {repoVisible && <Repository repoUrl={profile?.repos_url} />}
      </GitProfileWrapper>
    </UiSection>
  );
};

export default GitHub;
