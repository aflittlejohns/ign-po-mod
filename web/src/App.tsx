import './App.css'
import { ValveFCCompound } from './components/process-objects/valve/ValveFC'
import { valveProps } from './components/process-objects/valve/initialState'

function App() {


  return (
    <>
		<ValveFCCompound.Root
		valveProps={valveProps}
		>
			<ValveFCCompound.Valve />
	</ValveFCCompound.Root>

</>
  )
}

export default App
