import cars from "../practice";

const [honda, tesla] = cars;

// Desestruturação correta para tesla
const { coloursByPopularity: teslaColours, speedStats: teslaSpeedStats } = tesla;
const teslaTopColour = teslaColours[0];
const { topSpeed: teslaTopSpeed } = teslaSpeedStats;

// Desestruturação correta para honda
const { coloursByPopularity: hondaColours, speedStats: hondaSpeedStats } = honda;
const hondaTopColour = hondaColours[0];
const { topSpeed: hondaTopSpeed } = hondaSpeedStats;


function App() {
  return (
    <>
      <table>
      <tbody>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
      </tbody>
    </table>
    </>
  )
}

export default App;

