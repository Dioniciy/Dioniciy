import {
  CHANGE_SLIDER_RANGE,
  changeSliderRange,
} from "features/sliders/actions";
import { useCallback, useEffect, useRef, useState } from "react";
import classes from "./DuobleSlider.module.scss";
import { useDispatch } from "react-redux";

export function DoubleSlider({ type, min, max, fraction, step }) {
  const dispatch = useDispatch();

  const [minValue, setMin] = useState(min);
  const [maxValue, setMax] = useState(max);

  const minValueRef = useRef(min);
  const maxValueRef = useRef(max);
  const rangeRef = useRef(null);
  const getPercentValue = useCallback(
    (value) => (value * 100) / max,
    [min, max]
  );

  const onSliderChanged = () => {
    dispatch(
      changeSliderRange(CHANGE_SLIDER_RANGE, {
        type: type,
        min: minValue,
        max: maxValue,
      })
    );
  };

  useEffect(() => {
    const positionStart = getPercentValue(minValue);
    const positionEnd = getPercentValue(maxValue);
    rangeRef.current.style.left = `${positionStart}%`;
    rangeRef.current.style.width = `${positionEnd - positionStart}%`;
  });
  return (
    <>
      <span>{type}</span>
      <div className={classes.slider}>
        <span>{minValue.toFixed(fraction)}</span>
        <div className={classes["slider__wrapper"]}>
          <div className={classes["slider__inner"]}>
            <input
              type="range"
              step={step}
              min={min}
              max={max}
              value={minValueRef.current}
              onMouseUp={(e) => onSliderChanged()}
              onChange={(e) => {
                minValueRef.current = minValue;
                const value = Math.min(Number(e.target.value), maxValue - 1);
                setMin(value);
              }}
              className={`${classes.thumb} ${classes['thumb--left']}`}
            />
            <input
              type="range"
              step={step}
              min={min}
              max={max}
              value={maxValueRef.current}
              onMouseUp={(e) => onSliderChanged()}
              onChange={(e) => {
                const value = Math.max(Number(e.target.value), minValue + 1);
                setMax(value);
                maxValueRef.current = maxValue;
              }}
              className={`${classes.thumb} ${classes['thumb--right']}`}
            />
            <div className={classes['slider__track']} />
            <div ref={rangeRef} className={classes['slider__range']} />
          </div>
        </div>
        <span>{maxValue.toFixed(fraction)}</span>
      </div>
    </>
  );
}
