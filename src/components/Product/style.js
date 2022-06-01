import styled, { css } from "styled-components";

const breakpoints = [
  {
    break: "1440px",
    width: "15rem",
    height: "22rem",
    boxShadow: true,
    hover: true,
  },
  {
    break: "1024px",
    width: "14rem",
    height: "20rem",
    boxShadow: true,
    hover: true,
  },
  {
    break: "768px",
    width: "12rem",
    height: "18rem",
    boxShadow: true,
    hover: true,
  },
  {
    break: "425px",
    width: "19rem",
    height: "21rem",
    boxShadow: false,
    hover: false,
  },
  {
    break: "375px",
    width: "17rem",
    height: "22rem",
    boxShadow: false,
    hover: false,
  },
  {
    break: "320px",
    width: "15rem",
    height: "20rem",
    boxShadow: false,
    hover: false,
  },
];

export const Card = styled.div`
  box-shadow: 2px 2px 4px #7a7a7a;
  background: #ffffff;
  border: 2px solid #e0e0e0;

  border-radius: 5px;
  width: 18rem;
  height: 24rem;

  ${() =>
    breakpoints.map(
      (breakpoint) => css`
        @media (max-width: ${breakpoint.break}) {
          min-width: ${breakpoint.width};
          width: ${breakpoint.width};
          height: ${breakpoint.height};
          ${!breakpoint.boxShadow &&
          css`
            box-shadow: none;
          `}
          ${!breakpoint.hover &&
          css`
            &:hover {
              transform: none;
            }
          `}
        }
      `
    )}

  &:hover {
    border: 2px solid #333333;
    transition: transform 500ms;

    button {
      background: #93d7af;
      border: 2px solid #93d7af;
    }
  }

  .product__info {
    padding: 15px 20px;
    height: 50%;

    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }

  .product__info > h2 {
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
  }

  .product__image {
    height: 100%;
    max-height: 50%;

    background: #f5f5f5;
    background-repeat: no-repeat;
    background-position: bottom center;
  }

  span {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 16px;
    color: #828282;
  }

  p {
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 24px;
    color: #27ae60;
  }
`;
