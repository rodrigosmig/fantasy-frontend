import { Flex, Skeleton, Stack } from "@chakra-ui/react"

export const CampoSkeleton = () => {
  return (
    <Flex
      justifyContent={"center"}
      align={"center"}
      mt={[4]}
    >
      <Stack width={["80%"]}>
        <Skeleton height={["31.25rem"]} />
      </Stack>

    </Flex>
  )
}