import React, { useEffect, useState, useCallback } from "react";
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

const GitHub = ({ username = "manikantaPitla" }) => {
  const [data, setData] = useState({
    profile: null,
    repos: [],
    loading: true,
    error: null,
  });
  const [repoVisible, setRepoVisible] = useState(false);

  const getProfileData = useCallback(async () => {
    try {
      setData({ profile: null, repos: [], loading: true, error: null });

      const profileRes = await fetch(
        `https://api.github.com/users/${username}`,
        {
          method: "GET",
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        }
      );

      if (!profileRes.ok) throw new Error("Failed to fetch profile");
      const profile = await profileRes.json();

      const reposRes = await fetch(profile.repos_url);
      if (!reposRes.ok) throw new Error("Failed to fetch repositories");
      const repos = await reposRes.json();

      const reposWithLanguages = await Promise.all(
        repos.map(async (repo) => {
          try {
            const langRes = await fetch(repo.languages_url);
            if (!langRes.ok) throw new Error("Failed to fetch languages");

            const languages = await langRes.json();
            const totalBytes = Object.values(languages).reduce(
              (acc, val) => acc + val,
              0
            );

            const languagePercentages = Object.entries(languages).map(
              ([language, bytes]) => ({
                language,
                percentage: totalBytes
                  ? ((bytes / totalBytes) * 100).toFixed(2)
                  : "0",
              })
            );

            return { ...repo, languages: languagePercentages };
          } catch {
            return { ...repo, languages: [] };
          }
        })
      );

      setData({
        profile,
        repos: reposWithLanguages,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.log(error.message);
      setData((prev) => ({ ...prev, loading: false, error: error.message }));
    }
  }, [username]);

  useEffect(() => {
    getProfileData();
  }, [getProfileData]);

  return (
    <UiSection id="github">
      <UiHeading>
        <span>04. </span>
        GitHub
      </UiHeading>
      <GitProfileWrapper>
        {data.loading ? (
          <RingLoader />
        ) : data.error ? (
          <ErrorContainer>
            <p>{data.error}</p>
            <UiButton onClick={getProfileData}>Retry</UiButton>
          </ErrorContainer>
        ) : (
          <ProfileWrapper>
            <ProfileCard>
              <img
                src={data.profile?.avatar_url}
                alt={data.profile?.name}
                title={data.profile?.name}
              />
              <div>
                <h3>{data.profile?.name}</h3>
                <p>@{data.profile?.login}</p>
                <p>{data.profile?.bio}</p>
              </div>
            </ProfileCard>
            <ButtonWrapper>
              <a href={data.profile?.html_url} target="_blank" rel="noreferrer">
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

        {repoVisible && data.repos.length > 0 && (
          <Repository repos={data.repos} />
        )}
      </GitProfileWrapper>
    </UiSection>
  );
};

export default React.memo(GitHub);
