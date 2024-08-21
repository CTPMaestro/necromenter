import { Box, Button, Text } from '@chakra-ui/react'
import { newRidgeState } from 'react-ridge-state'

const newState = newRidgeState(0)

function App() {
  const [count, setCount] = newState.use()

  return (
    <Box>
      <Text>Hello from chakra {count}</Text>
      <Button onClick={() => setCount(count + 1)}>Click</Button>
    </Box>
  )
}

export default App
