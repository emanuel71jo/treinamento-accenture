import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ContainerSM = styled.div`
  margin: 150px 0;
  width: 900px;
  height: 100%;
  background-color: ${mixins.colors.secondary};
  display: flex;
  flex-direction: column;
  align-self: center;
  border-radius: 25px;
  align-items: top;
  justify-content: center;
  padding: 50px;
`;

export const ContainerLG = styled(ContainerSM)`
  margin: 5% 0;
  width: 90%;
  flex-direction: row;
  padding: none;
`;

export const Title = styled.h1`
  margin: 50px 0;
  align-self: center;
  color: ${mixins.colors.primary};
  font-family: ${mixins.fonts.bold};
  font-size: ${mixins.typography.title};
`;
