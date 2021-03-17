import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Property(props) {
  const { title, icon } = { ...props };

  const [state, dispatch] = useReducer(reducer, initialState);

  const imagesCount = (state.count > 0) ? state.count : 0;
  const images = [...Array(imagesCount)].map((value, index) => (
    <img
      src={`/images/${icon}.svg`}
      alt="Hearth icon"
      width={32}
      height={32}
      className="pr-1"
    />
  ));

  return (
    <div className="mb-5">
      <h2 className="subtitle">{title}</h2>

      <div className="columns">
        <div className="column"> {images}</div>
        <div className="column">
          {" "}
          <button
            class="button"
            onClick={() => dispatch({ type: "increment" })}
          >
            +
          </button>
          <button
            class="button"
            onClick={() => dispatch({ type: "decrement" })}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Property;
