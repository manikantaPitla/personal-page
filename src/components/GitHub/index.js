import React, { useEffect, useState, useCallback } from "react";
import { UiButton, UiHeading, UiSection } from "../../utils/uiMaterials";
import {
  ButtonWrapper,
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
      setData((prev) => ({ ...prev, loading: true }));

      const profileRes = await fetch(
        `https://api.github.com/users/${username}`
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
            return { ...repo, languages: [] }; // Handle errors gracefully
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
          <p>{data.error}</p>
        ) : (
          <ProfileWrapper>
            <ProfileCard>
              <img src={data.profile?.avatar_url} alt={data.profile?.name} />
              <div>
                <h1>{data.profile?.name}</h1>
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
