const ProgressStepsProgressIcon = () => {
  return (
    <div className="relative rounded-2xl bg-white box-border w-[544px] h-[792px] overflow-hidden text-left text-lg text-foundation-purple-dark-active font-plus-jakarta-sans border-[0.9px] border-solid border-foundation-purple-light-hover">
      <div className="absolute top-[119px] left-[calc(50%_-_235.9px)] w-[491px] h-[470px]">
        <div className="absolute top-[0px] left-[0px] w-[472px] flex flex-row items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-col pt-0 px-0 pb-1 items-center justify-start gap-[4px]">
            {/* <img
              className="relative rounded-29xl w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/-step-icon-base3.svg"
            /> */}
            <div className="w-10 h-10 relative rounded-full flex flex-col justify-center items-center inline-flex bg-foundation-purple-normal">
              <div className="w-4 h-3.5 bg-[#fef6ee]"></div>
            </div>
            <div className="flex-1 relative rounded-sm bg-foundation-purple-normal w-0.5" />
          </div>
          <div className="w-[204px] flex flex-col pt-1 px-0 pb-4 box-border items-start justify-start gap-[2px]">
            <b className="relative tracking-[-0.02em] leading-[24px]">
              Que vendez vous ?
            </b>
            <div className="relative text-smi leading-[18px] font-medium text-lightslategray inline-block w-[295.73px]">{`Lorem ipsum dolor sit amet, cotetur adipiscing elit ipsum dolor sit. `}</div>
            <div className="flex flex-row pt-4 px-0 pb-0 items-start justify-start gap-[6px] text-center text-xs text-limegreen font-text-xs-medium">
              <div className="rounded-2xl bg-success-50 flex flex-row py-0.5 pr-2 pl-1.5 items-center justify-start gap-[4px] mix-blend-multiply">
                <img
                  className="relative w-3 h-3 overflow-hidden shrink-0"
                  alt=""
                  src="/check1.svg"
                />
                <div className="relative leading-[18px] font-medium">
                  Ventes
                </div>
              </div>
              <div className="rounded-2xl bg-success-50 flex flex-row py-0.5 pr-2 pl-1.5 items-center justify-start gap-[4px] mix-blend-multiply">
                <img
                  className="relative w-3 h-3 overflow-hidden shrink-0"
                  alt=""
                  src="/check1.svg"
                />
                <div className="relative leading-[18px] font-medium">
                  Marges
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[146px] left-[0.1px] w-[472px] flex flex-row items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-col pt-0 px-0 pb-1 items-center justify-start gap-[4px]">
            <img
              className="relative rounded-2xl w-8 h-8 overflow-hidden shrink-0"
              alt=""
              src="/-step-icon-base4.svg"
            />
            <div className="flex-1 relative rounded-sm bg-gainsboro w-0.5" />
          </div>
          <div className="flex-1 flex flex-col pt-1 px-0 pb-4 items-start justify-start gap-[2px]">
            <b className="relative tracking-[-0.02em] leading-[24px]">
              Indicateurs
            </b>
            <div className="self-stretch relative text-smi leading-[18px] font-medium text-lightslategray">{`Lorem ipsum dolor sit amet, cotetur adipiscing elit ipsum dolor sit. `}</div>
            <div className="self-stretch flex flex-col pt-4 px-0 pb-0 items-start justify-start text-center text-xs text-foundation-purple-normal-hover font-text-xs-medium">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[6px]">
                <div className="rounded-2xl bg-foundation-purple-white-hover flex flex-row py-0.5 px-2 items-center justify-start mix-blend-multiply">
                  <div className="relative leading-[18px] font-medium">
                    Formes Juridiques
                  </div>
                </div>
                <div className="rounded-2xl bg-foundation-purple-white-hover flex flex-row py-0.5 px-2 items-center justify-start mix-blend-multiply">
                  <div className="relative leading-[18px] font-medium">
                    Bénéfices
                  </div>
                </div>
                <div className="rounded-2xl bg-foundation-purple-white-hover flex flex-row py-0.5 px-2 items-center justify-start mix-blend-multiply">
                  <div className="relative leading-[18px] font-medium">
                    Trésorerie
                  </div>
                </div>
                <div className="rounded-2xl bg-foundation-purple-white-hover flex flex-row py-0.5 px-2 items-center justify-start mix-blend-multiply">
                  <div className="relative leading-[18px] font-medium">
                    Plan de Financement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[274px] left-[0px] w-[480px] flex flex-row items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-col pt-0 px-0 pb-1 items-center justify-start gap-[4px]">
            <img
              className="relative rounded-2xl w-8 h-8 overflow-hidden shrink-0"
              alt=""
              src="/-step-icon-base5.svg"
            />
            <div className="flex-1 relative rounded-sm bg-gainsboro w-0.5" />
          </div>
          <div className="w-[204px] flex flex-col pt-1 px-0 pb-4 box-border items-start justify-start gap-[2px]">
            <b className="relative tracking-[-0.02em] leading-[24px]">
              Processing
            </b>
            <div className="relative text-smi leading-[18px] font-medium text-lightslategray inline-block w-[295.73px]">{`Lorem ipsum dolor sit amet, cotetur adipiscing elit ipsum dolor sit. `}</div>
          </div>
        </div>
        <div className="absolute top-[380px] left-[0px] w-[480px] flex flex-row items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-col pt-0 px-0 pb-1 items-center justify-start gap-[4px]">
            <img
              className="relative rounded-2xl w-8 h-8 overflow-hidden shrink-0"
              alt=""
              src="/-step-icon-base5.svg"
            />
            <div className="flex-1 relative rounded-sm bg-gray-200 w-0.5 hidden" />
          </div>
          <div className="w-[204px] flex flex-col pt-1 px-0 pb-6 box-border items-start justify-start gap-[2px]">
            <b className="relative tracking-[-0.02em] leading-[24px]">
              Export de mon Business Plan
            </b>
            <div className="relative text-smi leading-[18px] font-medium text-lightslategray inline-block w-[330.95px]">{`Lorem ipsum dolor sit amet, cotetur adipiscing elit ipsum dolor sit. `}</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] box-border w-[544px] h-[76px] overflow-hidden text-xs text-lightslategray border-[1px] border-solid border-foundation-purple-light-hover">
        <div className="absolute top-[calc(50%_-_17px)] left-[calc(50%_-_8.4px)] flex flex-col items-center justify-start gap-[8px]">
          <div className="relative tracking-[-0.02em] leading-[18px] font-medium inline-block w-[246px]">
            Vous êtes à 12% d’avoir terminé les questions
          </div>
          <div className="w-[245px] flex flex-row items-center justify-start">
            <div className="flex-1 relative rounded-lg h-2">
              <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded bg-foundation-purple-light-hover h-2" />
              <div className="absolute w-[22.44%] top-[0px] right-[77.56%] left-[0%] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-foundation-purple-normal h-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressStepsProgressIcon;
