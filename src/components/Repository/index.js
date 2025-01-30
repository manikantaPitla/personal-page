import React from "react";
import { UiHeading } from "../../utils/uiMaterials";
import { RepoContainer } from "./style";
import Repo from "../Repo";

const Repository = ({ repos }) => {
  return (
    <RepoContainer>
      <UiHeading>Repository</UiHeading>
      <ul>
        {repos.map((repo) => (
          <Repo key={repo.id} repoData={repo} />
        ))}
      </ul>
    </RepoContainer>
  );
};

export default Repository;
