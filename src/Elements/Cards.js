import styled from "styled-components";
import { elevation, transition, colors } from "../Utils";

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  color: ${colors.purp};
  ${elevation[4]};
  ${transition({})};
  &:hover {
    ${elevation[5]}
  }
`;
