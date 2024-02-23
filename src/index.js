// App.jsx
import * as rfs from "@42foryou/rfs";

const App = () => {
  console.log(rfs.createElement("h1", null, "Hello, rfs!"));

  return (
    <>
      <div>
        <h1>Hello, rfs!</h1>
        <p>This is a simple example using rfs's createElement with JSX.</p>
      </div>
    </>
  );
};

console.log(App());
