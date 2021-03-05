import styled from "styled-components";

export const FilmCategoryMenu = styled.div`
  color: white;
  display: inline-flex;
`;

export const FilmCategoryMenuItem = styled.div`
  cursor: pointer;
  border-bottom: 4px solid #555555;
  height: 25px;
  padding: 0 8px;

  &:hover {
    border-bottom: 4px solid #f65261;
  }
`;
