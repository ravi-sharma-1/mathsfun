import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MathsFun.module.css";
import Base from "../../common/components/baseOprtation/Base";
import FractionalOperations from "../../common/components/fractionalOperation/FractionalOperations";
import ValidationText from "../../common/components/validate/ValidationText";
import MultilineSum from "../../common/components/multilineSum/MultilineSum";

const MathsFun = (props) => {
  const [correct, setCorrect] = useState();
  const childRef = useRef();
  return (
    <>
      <h2 className={styles.header}>Welcome to the Maths World</h2>
      {(correct !== undefined && <ValidationText correct={correct} />) || ""}
      {/* <Base inputArgs={[4, 5]} operator={"+"} type={"editOutput"}  ref={childRef}/> */}
      {/* <Base
        inputArgs={[null, 4, null, null]}
        operator={"+"}
        type={"editInput"}
        output={20}
        ref={childRef}
      /> */}
      {/* <FractionalOperations
        input={[
          [2, 3],
          [4, 5],
          [3, 5],
        ]}
        operator={"+"}
        ref={childRef}
      /> */}
      {/* <MultilineSum
        primaryList={[5, 6, null, 4]}
        secondaryList={[6, null, 9, 3]}
        output={[1, 2, 0, 2, 7]}
        operator={"+"}
        ref={childRef}
      /> */}
      <button
        className={styles.button}
        onClick={() => {
          const res = childRef.current.handleValidate();
          setCorrect(res);
        }}
      >
        Validate
      </button>
    </>
  );
};

MathsFun.propTypes = {};

export default MathsFun;
