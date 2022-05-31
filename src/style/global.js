import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
      }

    button {
        cursor: pointer;
    }

    ul, ol, li {
        list-style: none;
    }
    `;

export const Button = styled.button`
  border-radius: 8px;
  outline: none;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  ${(props) => {
    switch (props.buttonSize) {
      case "medium":
        return css`
          color: #828282;
          background: #e0e0e0;
          border: 2px solid #e0e0e0;

          &:hover {
            color: #e0e0e0;
            background: #828282;
            border: 2px solid #828282;
          }

          font-size: 1rem;
          padding: 0.6rem;
          width: 100%;
        `;

      default:
        return css`
          color: #ffffff;
          background: #27ae60;
          border: 2px solid #27ae60;

          &:hover {
            background: #93d7af;
            border: 2px solid #93d7af;
          }

          font-size: 0.8rem;
          padding: 0.5rem 0.8rem;
        `;
    }
  }};
`;
