"use client";

interface SteppedSliderProps {
  value: number;
  min?: number;
  max?: number;
  steps?: number[];
  onChange: (val: number) => void;
}

export default function SteppedSlider({
  value,
  steps = [50, 500, 1000, 2500, 5000],
  onChange,
}: SteppedSliderProps) {
  const currentIndex = steps.findIndex((s) => s >= value);
  const activeIndex = currentIndex === -1 ? steps.length - 1 : currentIndex;
  const progressPercent = (activeIndex / (steps.length - 1)) * 100;

  const handleStepClick = (idx: number) => {
    onChange(steps[idx]);
  };

  return (
    <div className="common-stepped-slider flex flex-col gap-3 w-full my-4">
      <div className="common-stepped-slider__bar relative flex items-center h-6 cursor-pointer">
        {/* Track Line */}
        <div className="common-stepped-slider__track relative flex items-center w-full">
          <div className="common-stepped-slider__line relative flex-grow h-[2px] bg-[#1c1c1c]/15 rounded-full overflow-hidden">
            <div
              className="common-stepped-slider__line--filled h-full bg-[#2377F6] transition-all duration-150"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Stops */}
          <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
            {steps.map((step, idx) => {
              const isFilled = idx <= activeIndex;
              return (
                <button
                  key={step}
                  type="button"
                  onClick={() => handleStepClick(idx)}
                  className={`common-stepped-slider__stop relative w-2 h-2 rounded-full pointer-events-auto transition-transform duration-150 ${
                    isFilled ? "bg-[#2377F6] scale-110 opacity-100" : "bg-[#1c1c1c]/30 hover:opacity-60"
                  }`}
                  aria-label={`Select ${step} conversations`}
                />
              );
            })}
          </div>

          {/* Thumb */}
          <div
            className="common-stepped-slider__thumb absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#a8a8a8] shadow-md flex items-center justify-center -translate-x-1/2 cursor-grab active:cursor-grabbing transition-all duration-150 z-10"
            style={{ left: `${progressPercent}%` }}
          >
            <span className="common-stepped-slider__thumb-inner w-1.5 h-1.5 rounded-full bg-black border-2 border-white" />
          </div>
        </div>
      </div>

      <div className="common-stepped-slider__labels flex justify-between text-xs text-[#8c8c8c]">
        <span>50</span>
        <span>5,000+</span>
      </div>
    </div>
  );
}
