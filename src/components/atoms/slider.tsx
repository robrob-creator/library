/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */

export interface SliderProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  value: number;
}

export const Slider = ({ min, max, value }: SliderProps) => {
  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className="bg-blue-400 text-lg"
      />
    </div>
  );
};
