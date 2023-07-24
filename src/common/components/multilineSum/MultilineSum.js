import React, { forwardRef, useState, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import styles from "./MultilineSum.module.css";

const MultilineSum = forwardRef((props, ref) => {
  const diff = props.output.length - props.primaryList.length;
  const [primaryList, setPrimaryList] = useState([...props.primaryList]);
  const [secondaryList, setSecondaryList] = useState([...props.secondaryList]);
  const [output, setOutput] = useState([...props.output]);

  const handleValidate = () => {
    const primary = Number(primaryList.join(""));
    const secondary = Number(secondaryList.join(""));
    const op = Number(output.join(""));
    return op === primary + secondary;
  };

  useImperativeHandle(ref, () => ({ handleValidate }));
  const renderSum = () => {
    const emptyElem = new Array(diff).fill(diff);
    return (
      <>
        <div className={styles.outerContiner}>
          <div className={styles.elemContainer}>
            {emptyElem.map((a) => {
              return <span className={styles.elem}>&nbsp;</span>;
            })}
            {props.primaryList.length &&
              props.primaryList.map((elem, index) => (
                <>
                  <span className={styles.elem}>
                    {elem !== null && elem !== undefined ? (
                      elem
                    ) : (
                      <>
                        <input
                          type="number"
                          className={styles.input}
                          onChange={(e) => {
                            primaryList[index] = e.target.value;
                            setPrimaryList(primaryList);
                          }}
                        />
                      </>
                    )}
                  </span>
                </>
              ))}
          </div>
          <span className={styles.elemContainer}>
            {(props.secondaryList.length && props.operator) || ""}
          </span>
          <div className={`${styles.elemContainer} ${styles.botBorder}`}>
            {emptyElem.map((a) => {
              return <span className={styles.elem}>&nbsp;</span>;
            })}
            {props.secondaryList.length &&
              props.secondaryList.map((elem, index) => (
                <>
                  <span className={styles.elem}>
                    {elem !== null && elem !== undefined ? (
                      elem
                    ) : (
                      <>
                        <input
                          type="number"
                          className={styles.input}
                          onChange={(e) => {
                            secondaryList[index] = e.target.value;
                            setSecondaryList(secondaryList);
                          }}
                        />
                      </>
                    )}
                  </span>
                </>
              ))}
          </div>
          <div className={`${styles.elemContainer} ${styles.result}`}>
            {props.output.length &&
              props.output.map((elem, index) => (
                <>
                  <span className={styles.elem}>
                    {elem !== null && elem !== undefined ? (
                      elem
                    ) : (
                      <>
                        <input
                          type="number"
                          className={styles.input}
                          onChange={(e) => {
                            output[index] = e.target.value;
                            setOutput(output);
                          }}
                        />
                      </>
                    )}
                  </span>
                </>
              ))}
          </div>
        </div>
      </>
    );
  };
  return <>{renderSum()}</>;
});

MultilineSum.propTypes = {
  primaryList: PropTypes.array,
  secondaryList: PropTypes.array,
  operator: PropTypes.any,
  output: PropTypes.array,
};

export default MultilineSum;
