import styled from "styled-components";

export const SettingsStyled = styled.article`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-start;
  align-content: flex-start;
  align-items: stretch;
  flex: 1;
  h2 {
    margin: 5px 0;
  }
  .settingsTypes {
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    p {
      margin: 0;
    }
  }
  .optionsButtons {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;
