import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("#f15025");
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState([]);

  function handleSubmit(e) {
    try {
      e.preventDefault();
      const colors = new Values(color).all(10);
      setColorList(colors);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {colorList.map((color, index) => {
          return <SingleColor color={color} key={index} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
