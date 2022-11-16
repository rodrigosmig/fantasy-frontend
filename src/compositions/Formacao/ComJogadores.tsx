import { Flex } from "@chakra-ui/react"
import { useJogadoresPosicao } from "../../components/Contexts/JogadoresPosicoesContext";
import { Camisas } from "./Camisas"


export const ComJogadores = () => {
  const { defesa, meio, ataque, goleiro } = useJogadoresPosicao();

  return (
    <>
      <Flex
        justifyContent={"space-evenly"}
      >
        {ataque.map((jogador) => (
          <Camisas alt={jogador.nome} key={jogador.id} />
        ))}
      </Flex>

      <Flex
        justifyContent={"space-evenly"}
      >
        {meio.map((jogador) => (
          <Camisas alt={jogador.nome} key={jogador.id} />
        ))}
      </Flex>

      <Flex
        justifyContent={"space-evenly"}
      >
        {defesa.map((jogador) => (
          <Camisas alt={jogador.nome} key={jogador.id} />
        ))}
      </Flex>

      <Flex
        mb={[10]}
        justifyContent={"space-evenly"}
      >
        {goleiro.map((jogador) => (
          <Camisas alt={jogador.nome} key={jogador.id} />
        ))}
      </Flex>
    </>
  )
}