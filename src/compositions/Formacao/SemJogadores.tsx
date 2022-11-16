import { Flex } from "@chakra-ui/react";
import { useJogadoresPosicao } from "../../components/Contexts/JogadoresPosicoesContext";
import { Camisas } from "./Camisas";


export const SemJogadores = () => {
  const { quantidadePosicoes } = useJogadoresPosicao();

  return (
    <>
      <Flex
        justifyContent={"space-evenly"}
      >
        {new Array(quantidadePosicoes.ataque).fill(quantidadePosicoes.ataque).map((element, index) => (
          <Camisas alt="Atacante" key={index} />
        ))}
      </Flex>

      <Flex
        justifyContent={"space-evenly"}
      >
        {new Array(quantidadePosicoes.meio).fill(quantidadePosicoes.meio).map((element, index) => (
          <Camisas alt="Meio-Campo" key={index} />
        ))}
      </Flex>

      <Flex
        justifyContent={"space-evenly"}
      >
        {new Array(quantidadePosicoes.defesa).fill(quantidadePosicoes.defesa).map((element, index) => (
          <Camisas alt="Zagueiro" key={index} />
        ))}
      </Flex>

      <Flex
        mb={[10]}
        justifyContent={"space-evenly"}
      >
        {new Array(quantidadePosicoes.goleiro).fill(quantidadePosicoes.goleiro).map((element, index) => (
          <Camisas alt="Goleiro" key={index} />
        ))}
      </Flex>
    </>
  )
}