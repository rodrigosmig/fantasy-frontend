import { 
  Box, 
  Table as ChakraTable, 
  TableProps as ChakraTableProps,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react"
import { memo, ReactNode } from "react"

interface Props extends ChakraTableProps {
  theadData: string[];
  isEmpty?: boolean;
  showAdditionalColumn?: boolean;
  children: ReactNode;
}

const TableComponent = ({ 
  theadData, 
  isEmpty = false,
  children, 
  ...rest 
}: Props) => {
  return (
    <Box overflowX="auto">
      { isEmpty 
        ? (
          <Text fontWeight={"bold"} mt={[4]}>
            Nenhum registro encontrado
          </Text>
        ) : (
          <ChakraTable         
            colorScheme="whiteAlpha"
            {...rest}
          >
            <Thead>
              <Tr>
                { theadData.map(head => (
                    <Th textAlign={"center"} key={head}>{ head }</Th>
                  ))
                }
              </Tr>
            </Thead>
            
            { children }

          </ChakraTable>
        )}      
    </Box>
  )
}

export const Table = memo(TableComponent);