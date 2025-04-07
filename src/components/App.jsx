import cars from "../practice";

const [honda, tesla] = cars;

// Desestruturação correta para tesla
const { coloursByPopularity: [teslaTopColour], speedStats: {topSpeed:teslaTopSpeed} } = tesla;

// Desestruturação correta para honda
const { coloursByPopularity: [hondaTopColour], speedStats: {topSpeed:hondaTopSpeed} } = honda;


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

