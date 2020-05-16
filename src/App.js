import React, { useEffect, useState } from "react";
import "./App.css";

const App = (props) => {
  const [state, setState] = useState(props);
  // 分割代入state.name を nameで記述
  const { name, price } = state;

  useEffect(() => {
    console.log("this is like componentDidMount or componentDidUpdate");
  });

  //第2引数にから配列で初レンダリング時のみ呼び出し
  useEffect(() => {
    console.log("this is like componentDidMount");
  }, []);

  // 第2引数の配列いれたものが変わった時だけ呼び出し
  useEffect(() => {
    console.log("this callback is for name only");
  }, [name]);

  return (
    <>
      <p>
        現在の{name} は{price}円です
        <button onClick={() => setState({ ...state, price: price + 1 })}>
          +1
        </button>
        <button onClick={() => setState({ ...state, price: price - 1 })}>
          -1
        </button>
        <button onClick={() => setState(props)}>Reset</button>
        <input
          type="text"
          value={name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
      </p>
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
