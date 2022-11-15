import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useTime } from "../../hooks/useTime";
import { IJogadoresPosicoesContextData, IJogador, IQuantidadePosicoes } from "../../types/jogador";
import { posicoesMap } from "../../utils/helpers";

const JogadoresPosicoesContext = createContext({} as IJogadoresPosicoesContextData);

export const JogadoresPosicoesProvider = ({ children }: JogadoresPosicoesProviderProps) => {
  const { data: time } = useTime();

  const [jogadoresDefesa, setjogadoresDefesa] = useState<IJogador[]>([]);
  const [jogadoresMeio, setJogadoresMeio] = useState<IJogador[]>([]);
  const [jogadoresAtaque, setJogadoresAtaque] = useState<IJogador[]>([]);
  const [jogadorGoleiro, setJogadorGoleiro] = useState<IJogador[]>([]);
  const [quantidadePosicoes, setQuantidadePosicoes] = useState({} as IQuantidadePosicoes);

  useEffect(() => {
    if (time) {
      const quantidadeDefesa = parseInt(time.formacao.nome.substring(0,1));
      const quantidadeMeio = parseInt(time.formacao.nome.substring(2,3));
      const quantidadeAtaque = parseInt(time.formacao.nome.substring(4));

      const quantidadeTotal = {
        defesa: quantidadeDefesa,
        meio: quantidadeMeio,
        ataque: quantidadeAtaque,
        goleiro: 1
      }
      
      const defesa = time.jogadores.filter(jogador => jogador.posicao.id === posicoesMap.defesa)
      const meio = time.jogadores.filter(jogador => jogador.posicao.id === posicoesMap.meio)
      const ataque = time.jogadores.filter(jogador => jogador.posicao.id === posicoesMap.ataque)
      const goleiro = time.jogadores.filter(jogador => jogador.posicao.id === posicoesMap.goleiro)
  
      setjogadoresDefesa(defesa);
      setJogadoresMeio(meio);
      setJogadoresAtaque(ataque);
      setJogadorGoleiro(goleiro);
      setQuantidadePosicoes(quantidadeTotal);
    }
  }, [time]);

  return (
    <JogadoresPosicoesContext.Provider value={{ 
      defesa: jogadoresDefesa,
      meio: jogadoresMeio,
      ataque: jogadoresAtaque,
      goleiro: jogadorGoleiro,
      quantidadePosicoes
    }}>
      { children }
    </JogadoresPosicoesContext.Provider>
  )  
}

export const useJogadoresPosicao = () => {
  const { goleiro, defesa, meio, ataque, quantidadePosicoes } = useContext(JogadoresPosicoesContext);
  
  return {
    goleiro,
		defesa,
    meio,
    ataque,
    quantidadePosicoes
  }
}

interface JogadoresPosicoesProviderProps {
  children: ReactNode;
}