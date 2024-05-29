
import './App.css'
import NavBar from './NavBar/NavBar'
import LineCharts from './components/LineCharts/LineCharts';
import PriceOptions from './components/PriceOptions/PriceOptions';
import SimpleLineChart from './components/SimpleLineChart/SimpleLineChart';
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-4xl bg-red-600 p-4'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
      <SimpleLineChart></SimpleLineChart>
    </>
  )
}

export default App;
