import {
	Box,
	Grid,
	GridItem, useColorModeValue
} from "@chakra-ui/react";
import { FootballField } from "components/FootballField";
import { Header } from "components/Header";
import { useDispatch } from "hooks/useDispatch";
import { useSelector } from "hooks/useSelector";
import { memo, PropsWithChildren, useEffect } from "react";
import { tokenService } from "services/tokenService";
import { updateData } from "store/thunks/authThunk";
import { Player } from "types/player";

const LayoutComponent = ({ children, onClick }: LayoutProps) => {
	const { isAuthenticated } = useSelector(({auth}) => auth);
	const dispatch = useDispatch();

	const bgColor = useColorModeValue('gray.50', 'gray.900');

	useEffect(() => {
		const {token} = tokenService.get(null)

		if(!isAuthenticated && tokenService.isValid(token)) {
			dispatch(updateData())
		}
	}, [dispatch, isAuthenticated])

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
				gridTemplateRows={"10vh 80vh 20vh"}
				gridTemplateColumns={'3fr 2fr'}
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
					<FootballField onClick={onClick} />
				</GridItem>

				<GridItem area={'aside'}>
					{ children }
				</GridItem>
			</Grid>
		</Box>	
	)
}

interface LayoutProps extends PropsWithChildren {
	onClick?: (player: Player) => void
}

export const Layout = memo(LayoutComponent);