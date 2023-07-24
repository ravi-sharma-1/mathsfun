import React, { forwardRef, useState, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import styles from "./Base.module.css";
import { mul, sum } from "../../../utils/mathsUtil";

const Base = forwardRef((props, ref) => {
  const [data, setData] = useState(""); //This is for input field normal case
  const [inputData, setInputData] = useState([...props.inputArgs]);
  // Calculate the results of operation
  const outputResults = (arr, operation) => {
    switch (operation) {
      case "+":
        return sum.apply(this, arr);
      case "x":
        return mul.apply(this, arr);
    }
  };
  //method to validate the results
  const handleValidate = () => {
    let results, output;
    if (props.type === "editOutput") {
      results = outputResults(props.inputArgs, props.operator);
      output = data;
    }
    if (props.type === "editInput") {
      results = outputResults(inputData, props.operator);
      output = props.output;
    }
    return results === Number(output);
  };

  useImperativeHandle(ref, () => ({
    handleValidate,
  }));

  //Display the html based on types
  const renderHtml = () => {
    switch (props.type) {
      case "editOutput":
        return (
          <>
            <div>
              <span className={styles.label}>
                {props.inputArgs.length &&
                  props.inputArgs.map((elem, index) => (
                    <>{`${elem} ${
                      props.inputArgs[index + 1] ? props.operator : ""
                    }`}</>
                  ))}
                {`${props.inputArgs.length ? " = " : ""}`}
              </span>
              <input
                type="number"
                className={styles.input}
                onChange={(e) => setData(e.target.value)}
              />
            </div>
          </>
        );
      case "editInput":
        return (
          <>
            <div>
              {props.inputArgs.length &&
                props.inputArgs.map((elem, i) => {
                  return (
                    <>
                      {(elem && elem) || (
                        <input
                          type="number"
                          className={styles.input}
                          onChange={(e) => {
                            inputData[i] = Number(e.target.value);
                            setInputData(inputData);
                          }}
                        />
                      )}{" "}
                      {(props.inputArgs[i + 1] !== undefined &&
                        props.operator + " ") ||
                        ""}
                    </>
                  );
                })}
              {`${props.output ? " = " + props.output : ""}`}
            </div>
          </>
        );
    }
  };
  return <>{renderHtml()}</>;
});
Base.propTypes = {
  type: PropTypes.string.isRequired,
  inputArgs: PropTypes.array.isRequired,
  operator: PropTypes.any,
  output: PropTypes.number,
};
export default Base;
