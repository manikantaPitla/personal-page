import React, { useMemo } from "react";
import {
  CustomBadge,
  CustomButton,
  RepoBottomFlex,
  RepoCard,
  RepoFullName,
  RepoName,
  RepoTopFlex,
  LanguageList,
  LanguageBar,
  LanguagePercentageItem,
} from "./style";
import { IconExport } from "../../utils/uiComponents/Icons";
import useFetchData from "../../hooks/useFetchData";
import { LineLoader } from "../../utils/uiComponents/Loaders";

const languageColors = {
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  C: "#555555",
  "C++": "#f34b7d",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Swift: "#ffac45",
  Kotlin: "#F18E33",
  Go: "#00ADD8",
  Rust: "#dea584",
  Dart: "#00B4AB",
  Shell: "#89e051",
  "C#": "#178600",
  Vue: "#42b883",
  SCSS: "#c6538c",
  SASS: "#a53b70",
};

const getLanguageColor = (language) => languageColors[language] || "#ccc";

const Repo = ({ repoData }) => {
  const {
    name,
    full_name,
    visibility,
    html_url,
    default_branch,
    homepage,
    languages_url,
  } = repoData;
  const { data: languages = {}, loading, error } = useFetchData(languages_url);

  const languagePercentages = useMemo(() => {
    const totalBytes = Object.values(languages).reduce(
      (acc, val) => acc + val,
      0
    );
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
                      <p
                        className="language-bullet"
                        style={{ backgroundColor: getLanguageColor(language) }}
                      ></p>
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
