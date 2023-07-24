import React from "react";
import PropTypes from "prop-types";
import styles from "./ValidationText.module.css";

const ValidationText = (props) => {
  return (
    <>
      {props.correct ? (
        <span className={styles.success}>Correct!!!!!!!!</span>
      ) : (
        <span className={styles.error}>Incorrect!!!!!!</span>
      )}
    </>
  );
};

ValidationText.propTypes = {
  correct: PropTypes.bool,
};

export default ValidationText;
