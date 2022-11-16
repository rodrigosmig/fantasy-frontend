import { 
	Box, 
	Grid, 
	GridItem, 
	useColorMode, 
	useColorModeValue 
} from "@chakra-ui/react";
import { memo, ReactNode } from "react"
import { Campo } from "../Campo/Campo";
import { Header } from "../Header/Header";

const LayoutComponent = ({ children }: TeamDataProps) => {
	const bgColor = useColorModeValue('gray.50', 'gray.900');

	return (
		<Box 
			w={["67.5rem"]}
			m={["auto"]}
			bgColor={bgColor}
		>
			<Grid
				templateAreas={`"header header"
												"main aside"
												"footer footer"`}
				gridTemplateRows={"10vh 80vh 10vh"}
				gridTemplateColumns={'2fr 1fr'}
				gap='1'
			>
				<GridItem 
					as="header" 
					area={'header'}
					display="flex"
					justifyContent={["center"]}
					alignItems={["flex-end"]}
				>
					<Header />
				</GridItem>

				<GridItem area={'main'}>
					<Campo />
				</GridItem>

				<GridItem area={'aside'}>
					{ children }
				</GridItem>

				<GridItem area={'footer'}>
					footer
				</GridItem>
			</Grid>
		</Box>	
	)
}

interface TeamDataProps {
	children: ReactNode;
}

export const Layout = memo(LayoutComponent);