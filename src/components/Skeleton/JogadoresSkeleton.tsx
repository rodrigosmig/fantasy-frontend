import { Flex, Skeleton, Stack } from "@chakra-ui/react"

export const JogadoresSkeleton = () => {
  return (
    <>
      <Stack spacing={3}>
        <Skeleton width={12} height={[8]} />
        <Skeleton height={[10]} />
        <Skeleton width={12} height={[8]} />
        <Skeleton height={[10]} />
        <Flex
          mt={[5]}
          justifyContent={"space-between"}
        >
          <Skeleton width={"85%"} height={[10]} />
          <Skeleton width={"14%"} height={[10]} />
        </Flex>
      </Stack>
      
    </>
  )
}