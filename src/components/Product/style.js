import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 2px 2px 4px #7a7a7a;
  background: #ffffff;
  border: 2px solid #e0e0e0;

  border-radius: 5px;
  height: 21rem;
  width: 14rem;

  &:hover {
    border: 2px solid #333333;
    transform: scale(1.1);
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
