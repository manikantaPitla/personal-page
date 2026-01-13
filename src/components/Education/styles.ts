import styled from "styled-components";

export const EduContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 80px;
`;

export const EduTimeLine = styled.ul`
  height: 500px;
  width: 2px;
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const EduItem = styled.li`
  height: 10px !important;
  width: 10px !important;
  border-radius: 50px;
  background-color: var(--secondary);
  position: relative;
  display: flex;
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
    align-items: center;
  }

  &:nth-child(even) {
    justify-content: flex-end;
    text-align: right;
  }

  div {
    padding: 0px 20px;

    p {
      white-space: nowrap;

      &:nth-child(1) {
        font-weight: 600;

        @media screen and (max-width: 995px) {
          white-space: normal;
        }
      }

      font-size: var(--font-size-xs);

      @media screen and (min-width: 768px) {
        font-size: var(--font-size-sm);
      }
    }
  }
`;

export const EduPara = styled.p`
  line-height: normal;
  text-align: inherit;
  margin-bottom: 5px;
  font-size: var(--font-size-base);
  color: var(--text-secondary);

  &.edu-title {
    color: var(--text-primary);
  }

  @media screen and (max-width: 500px) {
    font-size: var(--font-size-sm);
    line-height: 22px;
  }
`;
