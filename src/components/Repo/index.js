import React from "react";
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

// Define GitHub language colors
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

const Repo = ({ repoData }) => {
  const {
    name,
    full_name,
    visibility,
    html_url,
    default_branch,
    languages,
    homepage,
  } = repoData;
  console.log(repoData);

  return (
    <RepoCard>
      <RepoTopFlex>
        <div>
          <RepoName>{name}</RepoName>
          <RepoFullName>{full_name}</RepoFullName>
        </div>
        <a href={html_url} target="_blank" rel="noreferrer">
          <CustomButton>
            <IconExport size="18" />
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

        <LanguageBar>
          {languages.map(({ language, percentage }) => (
            <span
              key={language}
              style={{
                width: `${percentage}%`,
                backgroundColor: languageColors[language] || "#ccc",
              }}
            />
          ))}
        </LanguageBar>

        {languages.length > 0 && (
          <LanguageList>
            {languages.map(({ language, percentage }) => (
              <LanguagePercentageItem key={language}>
                <p
                  className="language-bullet"
                  style={{
                    backgroundColor: languageColors[language] || "#ccc",
                  }}
                ></p>
                <p>
                  {language}: {percentage}%
                </p>
              </LanguagePercentageItem>
            ))}
          </LanguageList>
        )}
      </RepoBottomFlex>
    </RepoCard>
  );
};

export default Repo;
