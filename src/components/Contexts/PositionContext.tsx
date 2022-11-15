import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { positionService } from "../../services/apiService/positionService";
import { tokenService } from "../../services/tokenService";
import { IPosition, IPositionContextData, IPositionForm } from "../../types/posicao";
import { useSession } from "./AuthContext";

const PositionContext = createContext({} as IPositionContextData);

export const PositionProvider = ({ children }: PositionProviderProps) => {
  const { user } = useSession();

  const [posicoes, setPosicoes] = useState<IPosition[]>([]);
  const [posicoesForm, setPosicoesForm] = useState<IPositionForm[]>([]);
  const [isLoadingPosicoes, setIsLoadingPosicoes] = useState(true);

  useEffect(() => {
    const getPositions = async () => {
      const response = await positionService.getPositions();
      const todasPosicoes = [{
        value: 0,
        label: "Selecione"
      }]
      const novasPosicoesForm = response.data.map(posicao => {
        return {
          value: posicao.id,
          label: posicao.nome
        }
      });

      setPosicoes(response.data)
      setPosicoesForm([
        ...todasPosicoes,
        ...novasPosicoesForm
      ]);

      setIsLoadingPosicoes(false);
    }

    const { token } = tokenService.get(null);

    if (token) {
      getPositions();
    }
  }, [user]);

  return (
    <PositionContext.Provider value={{ posicoes, posicoesForm, isLoadingPosicoes }}>
      { children }
    </PositionContext.Provider>
  )  
}

export const usePosicao = () => {
  const { posicoes, posicoesForm, isLoadingPosicoes } = useContext(PositionContext);
  
  return {
		posicoes,
    posicoesForm,
    isLoadingPosicoes
  }
}

interface PositionProviderProps {
  children: ReactNode;
}