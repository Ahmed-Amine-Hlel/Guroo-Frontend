import { HiMiniArrowLeft } from 'react-icons/hi2';
// import InputCheckBox from './InputCheckBox';
// import { useState, useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '../hooks/hooks';
// import { setAnswer } from '../store/answersSlice';
// import InputPercentage from './InputPercentage';
// import QuestionAiBox from './QuestionAiBox';

const SectionTwoStep6 = ({
  currentBusinessPlanId,
  handleBack,
}: {
  currentBusinessPlanId: string | undefined;
  handleBack: () => void;
}) => {
  console.log('currentBusinessPlanId', currentBusinessPlanId);
  // const [shouldSetupHeadquarters, setShouldSetupHeadquarters] = useState(true);
  // const [hasPayrollAtHeadquarters, setHasPayrollAtHeadquarters] =
  //   useState(true);

  // const dispatch = useAppDispatch();

  // const answers = useAppSelector((state) => state.answers.answers);

  // const isPayrollConsideredInPercentage = answers['474'] === 'true';

  // const handleInputChange = (rowNumber: string, value: unknown) => {
  //   dispatch(
  //     setAnswer({
  //       rowNumber,
  //       value,
  //       businessPlanId: currentBusinessPlanId,
  //     })
  //   );
  // };

  // useEffect(() => {
  //   localStorage.setItem(
  //     'shouldSetupHeadquarters',
  //     JSON.stringify(shouldSetupHeadquarters)
  //   );
  // }, [shouldSetupHeadquarters]);

  return (
    <>
      <div>
        <div className="flex items-center gap-[12px] text-[#6D3B9E] mb-[8px]">
          <div>
            <HiMiniArrowLeft
              className={`text-[24px] ${'hover:cursor-pointer'}`}
              onClick={handleBack}
            />
          </div>
          <div className="text-[24px] font-bold">SectionTwoStep6</div>
        </div>
        {/* <div className="flex items-center text-[#A08FB1] text-[16px] ps-[38px] mr-[150px] mb-[28px] font-plus-jakarta-sans font-[500]">
          Déterminez ici votre masse salariale de manière intelligente, qui va
          travailler pour vous ? Et à combien ?
        </div> */}
      </div>
      {/* <div className="overflow-y-scroll py-[5px] overflow-x-hidden px-2 qb-thumb h-[500px] mb-[10px]">
        <div className="w-full sm:px-[35spx] mb-[24px]">
          <div className="flex items-center justify-between">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Souhaitez-mettre en place un siège social ?
            </label>
          </div>
          <InputCheckBox
            value={shouldSetupHeadquarters}
            onChange={(stringValue) =>
              setShouldSetupHeadquarters(stringValue === 'true')
            }
          />

          <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
            Si oui, nous avons quelques questions
          </div>
        </div>

        {shouldSetupHeadquarters && (
          <div className="w-full sm:px-[35spx] mb-[24px]">
            <div className="flex items-center justify-between">
              <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
                Avez vous une masse salariale sur le siège ?
              </label>
            </div>
            <InputCheckBox
              value={hasPayrollAtHeadquarters}
              onChange={(stringValue) =>
                setHasPayrollAtHeadquarters(stringValue === 'true')
              }
            />

            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Certaines dépenses de siège sont exprimées en pourcentage du
              chiffre d’affaires.
            </div>
          </div>
        )}

        {hasPayrollAtHeadquarters && shouldSetupHeadquarters && (
          <div className="w-full sm:px-[35spx] mb-[24px]">
            <div className="flex items-center justify-between">
              <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
                Si oui, est-elle pensée en % ?
              </label>
            </div>
            <InputCheckBox
              value={true}
              onChange={(boolValue) => handleInputChange('474', boolValue)}
            />

            <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
              Certaines dépenses de siège sont exprimées en pourcentage du
              chiffre d’affaires.
            </div>
          </div>
        )}

        {isPayrollConsideredInPercentage &&
          hasPayrollAtHeadquarters &&
          shouldSetupHeadquarters && (
            <div className="w-full sm:px-[35spx] mb-[24px]">
              <div className="flex items-center justify-between">
                <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
                  Quel est le % de la masse salariale siège
                </label>
              </div>
              <InputPercentage
                coloredAiBorder={true}
                value={answers['475'] ? answers['475'] : '0%'}
                onChange={(value) => handleInputChange('475', value)}
              />

              <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
                Certaines dépenses de siège sont exprimées en pourcentage du
                chiffre d’affaires.
              </div>
              <div className="mt-[10px] mb-6">
                <QuestionAiBox
                  message={
                    'Les management fees correspondent au montant envoyé chaque mois au siège de votre société.'
                  }
                />
              </div>
            </div>
          )}
      </div> */}
    </>
  );
};

export default SectionTwoStep6;
