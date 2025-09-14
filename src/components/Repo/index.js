import React, { useMemo } from "react";
import { CustomBadge, CustomButton, RepoBottomFlex, RepoCard, RepoFullName, RepoName, RepoTopFlex, LanguageList, LanguageBar, LanguagePercentageItem } from "./style";
import { IconExport } from "../../utils/uiComponents/Icons";
import useFetchData from "../../hooks/useFetchData";
import { LineLoader } from "../../utils/uiComponents/Loaders";
import { getLanguageColor } from "../../constants/colors";

const Repo = ({ repoData }) => {
  const { name, full_name, visibility, html_url, default_branch, homepage, languages_url } = repoData;
  const { data: languages = {}, loading, error } = useFetchData(languages_url);

  const languagePercentages = useMemo(() => {
    const totalBytes = Object.values(languages).reduce((acc, val) => acc + val, 0);
    return Object.entries(languages).map(([language, bytes]) => ({
      language,
      percentage: totalBytes ? ((bytes / totalBytes) * 100).toFixed(2) : "0",
    }));
  }, [languages]);

  return (
    <RepoCard>
      <RepoTopFlex>
        <div>
          <RepoName>{name}</RepoName>
          <RepoFullName>{full_name}</RepoFullName>
        </div>
        <a href={html_url} target="_blank" rel="noreferrer">
          <CustomButton>
            <IconExport size="16" />
          </CustomButton>
        </a>
      </RepoTopFlex>

      <RepoBottomFlex>
        <div className="repo-branch-visibility">
          <CustomBadge>{visibility}</CustomBadge>
          <CustomBadge>{default_branch}</CustomBadge>
          {homepage && (
            <a href={homepage} target="_blank" rel="noreferrer">
              <CustomBadge>Live Project</CustomBadge>
            </a>
          )}
        </div>

        {loading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <LineLoader />
          </div>
        ) : (
          <>
            {languagePercentages.length > 0 && (
              <>
                <LanguageBar>
                  {languagePercentages.map(({ language, percentage }) => (
                    <span
                      key={language}
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: getLanguageColor(language),
                      }}
                    />
                  ))}
                </LanguageBar>

                <LanguageList>
                  {languagePercentages.map(({ language, percentage }) => (
                    <LanguagePercentageItem key={language}>
                      <p className="language-bullet" style={{ backgroundColor: getLanguageColor(language) }}></p>
                      <p>
                        {language}: {percentage}%
                      </p>
                    </LanguagePercentageItem>
                  ))}
                </LanguageList>
              </>
            )}

            {error && (
              <div>
                <RepoFullName>{error}</RepoFullName>
              </div>
            )}
          </>
        )}
      </RepoBottomFlex>
    </RepoCard>
  );
};

export default Repo;
