// https://github.com/pmndrs/zustand
// function Controls() {
//     const increasePopulation = useStore(state => state.increasePopulation)
//     return <button onClick={increasePopulation}>one up</button>
//   }
//   export default Controls;

// https://react-hot-toast.com/
import toast, { Toaster } from 'react-hot-toast'

const notify = () =>
  toast('Good Job!', {
    icon: '👏',
  })

const App = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  )
}
export default App
