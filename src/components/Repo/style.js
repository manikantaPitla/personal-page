import styled from "styled-components";

export const RepoCard = styled.li`
  border: 1px solid var(--text-secondary-light);
  border-radius: var(--border-radius);
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px var(--shadow-glow);
    border-color: var(--text-glow);
  }
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
  padding: 8px;
  border-radius: var(--border-radius);
  background: var(--bg-card);
  border: 1px solid var(--border-primary);
  color: var(--text-glow);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  min-width: 36px;
  min-height: 36px;

  &:hover {
    background: var(--bg-card-hover);
    border-color: var(--text-glow);
    transform: translateY(-2px);
    box-shadow: 0 2px 8px var(--shadow-glow);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 4px var(--shadow-glow-subtle);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const CustomBadge = styled.div`
  border: 1px solid var(--text-secondary-light);
  padding: 5px 10px;
  border-radius: var(--border-radius);

  font-size: 10px;
`;
