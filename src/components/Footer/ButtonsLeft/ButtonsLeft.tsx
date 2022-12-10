import React from "react";
import FormStickies from "src/components/Footer/FormStickies/Form";
import styled from "styled-components";

const ButtonsLeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonsLeft = () => {
  return (
    <>
      <ButtonsLeftStyled>
        <FormStickies />
      </ButtonsLeftStyled>
    </>
  );
};

export default ButtonsLeft;
