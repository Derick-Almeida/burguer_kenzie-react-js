import styled from "styled-components";

export const CardCart = styled.li`
  display: flex;
  position: relative;
  text-align: start;
  margin-bottom: 20px;

  .product__cart--image {
    width: 5rem;
    height: 5rem;
    border-radius: 5px;
    margin-right: 15px;

    background: #e0e0e0;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .product__cart--info {
    width: 45%;
  }
  .product__cart--name {
    font-weight: 700;
    font-size: 0.9rem;
    line-height: 24px;
    color: #333333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }

  product__cart--category {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #828282;
  }

  .product__cart--button {
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 15px;

    border: none;
    background: transparent;
    color: #bdbdbd;

    position: absolute;
    right: 5px;
    top: 5px;

    &:hover {
      color: #333333;
      text-decoration: underline;
    }
  }
`;
