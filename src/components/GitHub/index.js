import React, { useState } from "react";
import { UiButton, UiHeading, UiSection } from "../../utils/uiMaterials";
import {
  ButtonWrapper,
  ErrorContainer,
  GitProfileWrapper,
  ProfileCard,
  ProfileWrapper,
} from "./style";
import { RingLoader } from "../../utils/uiComponents/Loaders";
import Repository from "../Repository";
import useFetchData from "../../hooks/useFetchData";

const GitHub = () => {
  console.log("GitHub");
  const [repoVisible, setRepoVisible] = useState(false);

  const {
    data: profile,
    loading,
    error,
    refetch,
  } = useFetchData("https://api.github.com/users/manikantaPitla");

  return (
    <UiSection id="github">
      <UiHeading>
        <span>04. </span>
        GitHub
      </UiHeading>
      <GitProfileWrapper>
        {loading ? (
          <RingLoader />
        ) : error ? (
          <ErrorContainer>
            <p>{error}</p>
            <UiButton onClick={refetch}>Retry</UiButton>
          </ErrorContainer>
        ) : (
          <ProfileWrapper>
            <ProfileCard>
              <img
                src={profile?.avatar_url}
                alt={profile?.name}
                title={profile?.name}
              />
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
              <UiButton
                type="button"
                onClick={() => setRepoVisible((prev) => !prev)}
              >
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
