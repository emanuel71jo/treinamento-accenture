import { ContainerLG, ContainerSM, Title } from "./styles";

function Container({ children, title, size }) {
  switch (size) {
    case "lg":
      return (
        <ContainerLG>
          <Title>{title}</Title>
          {children}
        </ContainerLG>
      );
    case "sm":
      return (
        <ContainerSM>
          <Title>{title}</Title>
          {children}
        </ContainerSM>
      );
    default:
      break;
  }
}

export default Container;
