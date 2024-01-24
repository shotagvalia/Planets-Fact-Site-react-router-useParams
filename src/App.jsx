import Planet from "./Planet";
import planets from "./data.json";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            {planets.map((planet, index) => {
              return (
                <Link key={index} to={`/${planet.name}`}>
                  <li style={{ fontSize: "2rem", cursor: "pointer" }}>
                    {planet.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </header>

      {/* <main>
        <Routes>
          {planets.map((planet, index) => {
            return (
              <Route
                key={index}
                element={<Planet planet={planet} />}
                path={`/${planet.name}`}
              ></Route>
            );
          })}
        </Routes>
      </main> */}

      <Routes>
        <Route path="/:planet" element={<Planet />}></Route>
      </Routes>
    </>
  );
}

export default App;
