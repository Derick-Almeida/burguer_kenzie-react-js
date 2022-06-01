import styled, { css } from "styled-components";

const breakpoints = [
  {
    break: "1440px",
    width: "15rem",
    height: "22rem",
  },
  {
    break: "1024px",
    width: "14rem",
    height: "20rem",
  },
  {
    break: "768px",
    width: "12rem",
    height: "18rem",
  },
  {
    break: "425px",
    width: "19rem",
    height: "21rem",
  },
  {
    break: "375px",
    width: "17rem",
    height: "22rem",
  },
  {
    break: "320px",
    width: "15rem",
    height: "20rem",
  },
];

export const SkeletonCard = styled.div`
  background: #ececec;
  border: 2px solid #ececec;
  border-radius: 5px;

  padding: 20px;
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

  &>div {
    border-radius: 5px;
    animation: pulsation 2s linear infinite normal forwards;
    transition: opacity 1s;
  }

  .skeleton--img {
    background: #c5c5c5;
    width: 100%;
    height: 50%;
  }

  .skeleton--name {
    background: #c5c5c5;
    width: 100%;
    height: 1.8rem;
    margin-top: 20px;
  }

  .skeleton--category {
    background: #c5c5c5;
    width: 80%;
    height: 1rem;
    margin-top: 15px;
  }
  .skeleton--price {
    background: #c5c5c5;
    width: 70%;
    height: 1rem;
    margin-top: 15px;
  }
  .skeleton--button {
    background: #c5c5c5;
    width: 50%;
    height: 2rem;
    margin-top: 15px;
  }

  @keyframes pulsation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
