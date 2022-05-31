import styled from "styled-components";

export const CardCart = styled.li`
  .product__Cart--image {
    width: 5rem;
    height: 4rem;
    border-radius: 5px;
    margin-right: 15px;

    background: #e0e0e0;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .product__Cart--button {
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 15px;

    border: none;
    background: transparent;
    color: #bdbdbd;

    position: absolute;
    right: 0;

    &:hover {
      color: #333333;
      text-decoration: underline;
    }
  }
`;
