import {
	Box,
	Grid,
	GridItem, useColorModeValue
} from "@chakra-ui/react";
import { FootballField } from "components/FootballField";
import { Header } from "components/Header";
import { useDispatch } from "hooks/useDispatch";
import { useSelector } from "hooks/useSelector";
import { memo, ReactNode, useEffect } from "react";
import { tokenService } from "services/tokenService";
import { updateData } from "store/thunks/authThunk";

const LayoutComponent = ({ children }: TeamDataProps) => {
	const { isAuthenticated } = useSelector(({auth}) => auth);
	const dispatch = useDispatch();

	const bgColor = useColorModeValue('gray.50', 'gray.900');

	useEffect(() => {
		const {token} = tokenService.get(null)
		console.log("useEffect autenticado", isAuthenticated)
		if(!isAuthenticated && tokenService.isValid(token)) {
			console.log("entrou use effect")
			dispatch(updateData())
		}
	}, [isAuthenticated])

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
					<FootballField />
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