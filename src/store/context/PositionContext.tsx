import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { positionService } from "../../services/apiService/positionService";
import { tokenService } from "../../services/tokenService";
import { IPosition, PositionContextData, PositionFormData } from "../../types/position";
import { useSession } from "./AuthContext";

const PositionContext = createContext({} as PositionContextData);

export const PositionProvider = ({ children }: PositionProviderProps) => {
  const { user } = useSession();

  const [posicoes, setPosicoes] = useState<IPosition[]>([]);
  const [posicoesForm, setPosicoesForm] = useState<PositionFormData[]>([]);

  useEffect(() => {
    const getPositions = async () => {
      const response = await positionService.getPositions();
      const novasPosicoesForm = response.data.map(posicao => {
        return {
          value: posicao.id,
          label: posicao.nome
        }
      });

      setPosicoes(response.data)
      setPosicoesForm(novasPosicoesForm)
    }

    const { token } = tokenService.get(null);

    if (token) {
      getPositions();
    }
  }, [user]);

  return (
    <PositionContext.Provider value={{ posicoes, posicoesForm }}>
      { children }
    </PositionContext.Provider>
  )  
}

export const usePosicao = () => {
  const { posicoes, posicoesForm } = useContext(PositionContext);
  
  return {
		posicoes,
    posicoesForm
  }
}

interface PositionProviderProps {
  children: ReactNode;
}