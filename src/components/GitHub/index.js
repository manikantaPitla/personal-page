import React, { useCallback, useEffect, useState } from "react";
import { UiButton, UiHeading, UiSection } from "../../utils/uiMaterials";
import {
  ButtonWrapper,
  GitProfileWrapper,
  ProfileCard,
  ProfileWrapper,
} from "./style";
import { RingLoader } from "../../utils/uiComponents/Loaders";
import Repository from "../Repository";

const GitHub = () => {
  const [data, setData] = useState({
    profile: null,
    repos: [],
    loading: true,
    error: null,
  });
  const [repoVisible, setRepoVisible] = useState(false);

  const fetchData = useCallback(async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      return await response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  const getProfileData = useCallback(async () => {
    try {
      const profile = await fetchData(
        "https://api.github.com/users/manikantaPitla"
      );
      const repos = await fetchData(profile.repos_url);

      // Fetch language stats for each repository
      const reposWithLanguages = await Promise.all(
        repos.map(async (repo) => {
          const languages = await fetchData(repo.languages_url);
          const totalBytes = Object.values(languages).reduce(
            (acc, val) => acc + val,
            0
          );

          // Convert to percentage
          const languagePercentages = Object.entries(languages).map(
            ([language, bytes]) => ({
              language,
              percentage: ((bytes / totalBytes) * 100).toFixed(2),
            })
          );

          return { ...repo, languages: languagePercentages };
        })
      );

      setData({
        profile,
        repos: reposWithLanguages,
        loading: false,
        error: null,
      });
    } catch (error) {
      setData({
        profile: null,
        repos: [],
        loading: false,
        error: error.message,
      });
    }
  }, [fetchData]);

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
                <div>
                  <h1>{data.profile?.name}</h1>
                  <p>@{data.profile?.login}</p>
                </div>
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
