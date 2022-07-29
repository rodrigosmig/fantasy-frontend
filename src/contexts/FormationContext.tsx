import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { formationService } from "../services/apiService/formationService";
import { tokenService } from "../services/tokenService";
import { IFormationContextData, IFormationForm } from "../types/formation";
import { useSession } from "./AuthContext";

const FormationContext = createContext({} as IFormationContextData);

export const FormationProvider = ({ children }: FormationProviderProps) => {
  const { user } = useSession();

  const [formations, setFormations] = useState<IFormationForm[]>([]);

  useEffect(() => {
    const { token } = tokenService.get(null);

    if (token) {
        formationService.getFormations().then(response => {
          const form = response.data.map(formation => {
            return {
              value: formation.id,
              label: formation.formation
            }
          });

          setFormations(form)
        })
    }
  }, [user]);

  return (
    <FormationContext.Provider value={{ formations }}>
      { children }
    </FormationContext.Provider>
  )  
}

export const useFormation = () => {
  const { formations } = useContext(FormationContext);
  
  return {
		formations
  }
}

interface FormationProviderProps {
    children: ReactNode;
  }