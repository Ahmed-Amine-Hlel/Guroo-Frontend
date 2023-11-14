import { HiMiniArrowLeft } from 'react-icons/hi2';
import InputMultiUnitNumber from './InputMultiUnitNumber';
import InputGooglePlaces, { LocationValue } from './InputGooglePlaces';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setAnswer } from '../store/answersSlice';

const SectionOneStep3 = ({
  currentBusinessPlanId,
  handleBack,
}: {
  currentBusinessPlanId: string | undefined;
  handleBack: () => void;
}) => {
  const dispatch = useAppDispatch();

  const answers = useAppSelector((state) => state.answers.answers);

  console.log('answers : ', answers);

  const handleSelectOption = (rowNumber: string, value: LocationValue) => {
    const rowNumbers = rowNumber.split('-');
    const city = value.city;
    const street = value.street || '';

    dispatch(
      setAnswer({
        rowNumber: rowNumbers[0],
        value: city,
        businessPlanId: currentBusinessPlanId,
      })
    );

    dispatch(
      setAnswer({
        rowNumber: rowNumbers[1],
        value: street,
        businessPlanId: currentBusinessPlanId,
      })
    );
  };

  const handleInputChange = (rowNumber: string, value: unknown) => {
    dispatch(
      setAnswer({
        rowNumber,
        value,
        businessPlanId: currentBusinessPlanId,
      })
    );
  };

  return (
    <>
      <div>
        <div className="flex items-center gap-[12px] text-[#6D3B9E] mb-[8px]">
          <div>
            <HiMiniArrowLeft
              className={`text-[24px] ${'hover:cursor-pointer'}`}
              onClick={handleBack}
              // onClick={!isBackDisabled ? handleBack : undefined}
            />
          </div>
          <div className="text-[24px] font-bold">
            Où est-ce que ça se passe ?
          </div>
        </div>
        <div className="flex items-center text-[#A08FB1] text-[16px] ps-[38px] mr-[150px] mb-[28px] font-plus-jakarta-sans font-[500]">
          Commençons par les bases, on fait les présentations ? Dans cette
          rubrique, donnez nous les premiers éléments structurants de votre
          projet
        </div>
      </div>

      <div className="overflow-y-scroll overflow-x-hidden px-2 py-[5px] qb-thumb h-[500px] mb-[10px]">
        <div className="w-full sm:px-[35spx] mb-[36px]">
          <label className="block px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
            Où sera situé votre restaurant ?
          </label>

          <InputGooglePlaces handleSelectOption={handleSelectOption} />
          {/* <StringInput value={""} onChange={() => console.log("onChange")} /> */}
          <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
            L'adresse nous donnera des informations clés sur les salaires, le
            loyer et les charges fixes.
          </div>
        </div>

        <div className="w-full sm:px-[35spx] mb-[10px]">
          <label className="block px-[16px] mb-[12px] text-[14px] text-foundation-purple-dark-active">
            Quelle est la surface de votre local
          </label>

          <InputMultiUnitNumber
            value={answers['16'] ? answers['16'] : '0'}
            onChange={(value) => handleInputChange('16', value)}
          />
        </div>
      </div>
    </>
  );
};

export default SectionOneStep3;
