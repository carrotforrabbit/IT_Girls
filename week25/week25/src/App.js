import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 6],
  ["Eat", 2],
  ["Doom Scrolling", 3],
  ["Learn Portuguese", 1],
  ["Code", 4],
  ["Sleep", 8],
];

export const options = {
  title: "My Daily Activities",
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"80%"}
      height={"400px"}
    />
      </header>
    </div>
  );
}

export default App;
