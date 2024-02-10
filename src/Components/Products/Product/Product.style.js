import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 160px;
  padding: 10px;
  background: #fff;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;

export const Price = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  color: #333;
  text-align: center;
  padding: 0 0 5px 0;
`;

export const Title = styled.div`
  width: 100%;
  height: 40px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #333;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Photo = styled.img`
  width: 100%;
  object-fit: cover;
  background-color: #cecece;
  aspect-ratio: 1/1;
`;
