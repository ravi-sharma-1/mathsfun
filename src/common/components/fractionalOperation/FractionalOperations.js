import React, { forwardRef, useImperativeHandle, useState } from "react";
import PropTypes from "prop-types";
import { sumArrayOfFractions } from "../../../utils/mathsUtil";
import styles from "./FractionalOperations.module.css";

const FractionalOperations = forwardRef((props, ref) => {
  const [num, setNum] = useState();
  const [denom, setDenom] = useState();
  const calculateFractionSum = (arr, operator) => {
    if (operator === "+") {
      return sumArrayOfFractions(arr);
    }
    return -1;
  };
  const handleValidate = () => {
    const result = calculateFractionSum(props.input, props.operator);
    if (result[0] === Number(num) && result[1] === Number(denom)) return true;
    return false;
  };
  useImperativeHandle(ref, () => ({ handleValidate }));

  const renderHTML = () => {
    return (
      <>
        {props.input.length &&
          props.input.map((elem, index) => {
            return (
              <>
                <span className={styles.label}>
                  {`${elem[0]}/${elem[1]}`}
                  {`${props.input[index + 1] ? props.operator : ""}`}
                </span>
              </>
            );
          })}
        {props.input.length ? (
          <>
            {`=`}{" "}
            <input
              type="number"
              className={styles.input}
              onChange={(e) => setNum(e.target.value)}
            />{" "}
            /{" "}
            <input
              type="number"
              className={styles.input}
              onChange={(e) => setDenom(e.target.value)}
            />
          </>
        ) : (
          ""
        )}
      </>
    );
  };

  return (
    <>
      <div>{renderHTML()}</div>
    </>
  );
});

FractionalOperations.propTypes = {
  input: PropTypes.array,
  operator: PropTypes.any,
};

export default FractionalOperations;
