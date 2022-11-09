import { Flex, Skeleton, Stack } from "@chakra-ui/react"

export const DadosTimeSkeleton = () => {
  return (
    <>
      <Stack width={["90%"]}>
        <Skeleton height={[12]} />
        <Skeleton height={[8]} />
        <Skeleton height={[8]} />
        <Skeleton height={[8]} />
      </Stack>
      <Flex
        mt={[5]}
      >
        <Skeleton width={20} height={[10]} />

      </Flex>
    </>
  )
}