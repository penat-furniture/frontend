import React, { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./MultiRangeSlider.css";

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  const [tempMinVal, setTempMinVal] = useState(min);
  const [tempMaxVal, setTempMaxVal] = useState(max);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(tempMinVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [tempMinVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(tempMaxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [tempMaxVal, getPercent]);

  // Get min and max values when any of the thumbs is moved and unpressed
  useEffect(() => {
    console.log(`minVal: ${minVal}, maxVal: ${maxVal}`)
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal]);

  const handleMinChange = (event) => {
    const value = Math.min(+event.target.value, tempMaxVal - 1);
    setTempMinVal(value);
    event.target.value = value.toString();
  };

  const handleMaxChange = (event) => {
    const value = Math.max(+event.target.value, tempMinVal + 1);
    setTempMaxVal(value);
    event.target.value = value.toString();
  };

  const handleMinMouseUp = () => {
    setMinVal(tempMinVal);
  };

  const handleMaxMouseUp = () => {
    setMaxVal(tempMaxVal);
  };

  return (
    <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={tempMinVal}
        ref={minValRef}
        onChange={handleMinChange}
        onMouseUp={handleMinMouseUp}
        onTouchEnd={handleMinMouseUp}
        className={classnames("thumb thumb--zindex-3", {
          "thumb--zindex-5": tempMinVal > max - 100,
        })}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={tempMaxVal}
        ref={maxValRef}
        onChange={handleMaxChange}
        onMouseUp={handleMaxMouseUp}
        onTouchEnd={handleMaxMouseUp}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{tempMinVal}</div>
        <div className="slider__right-value">{tempMaxVal}</div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
