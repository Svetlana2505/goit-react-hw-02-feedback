import styled from 'styled-components';

export const ButtonBox = styled.div`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #48d1cc;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background-color: #5f9ea0;
    color: #fff;
  }
`;
