import styled from "styled-components";

export const RepoContainer = styled.div`
  padding: 20px 0;

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    @media screen and (max-width: 1050px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
