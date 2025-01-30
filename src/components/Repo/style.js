import styled from "styled-components";

export const RepoCard = styled.div`
  border: 1px solid var(--text-secondary-light);
  border-radius: 15px;
  padding:15px 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RepoName = styled.h4`
  font-weight: 500;
  font-size: 14px;
`;
export const RepoFullName = styled.p`
  font-size: 12px;
`;
export const RepoTopFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  gap: 5px;
`;
export const RepoBottomFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .repo-branch-visibility {
    display: flex;
    gap: 5px;
  }
`;

export const LanguageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 15px;
  /* justify-content: space-between; */
`;

export const LanguageBar = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  overflow: hidden;
  border-radius: 5px;

  span {
    height: 5px;
  }
`;

export const LanguagePercentageItem = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  .language-bullet {
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }

  font-size: 10px;
`;

// Custom reusable styling -----------------------------

export const CustomButton = styled.button`
  outline: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 10px;
  background-color: var(--text-secondary-light);
  border: 1px solid var(--text-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomBadge = styled.div`
  /* background-color: var(--text-secondary-light); */
  border: 1px solid var(--text-secondary-light);
  padding: 5px 10px;
  border-radius: 10px;

  font-size: 10px;
`;
