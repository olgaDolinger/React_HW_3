import styled from "styled-components";

export const TopHeader = styled.div`
  width: 100%;
  display: flex;
  top: 30px;
  flex-direction: row;
  justify-content: space-between;
}
`;

export const MovieDetails = styled.div`
  display: block;
  margin: 0 auto;
  color: white;
`;

export const MovieImage = styled.img`
  width: 160px;
  height: 220px;
`;

export const MovieTitle = styled.div`
  font-size: 32px;
  padding-bottom: 5px;
`;

export const MovieCategory = styled.div`
  font-size: 18px;
  padding-bottom: 5px;
`;

export const MovieYear = styled.div`
  color: #f65261;
`;

export const MovieRunTime = styled.div`
  color: #f65261;
  padding-left: 100px;
  padding-bottom: 5px;
`;

export const MovieDescription = styled.div`
  height: 120px;
  overflow: auto;
`;

export const YearRuntime = styled.div`
  display: flex;
`;

export const TextBlock = styled.div`
  padding: 10px;
`;

export const Close = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
