import { HiMiniArrowLeft } from 'react-icons/hi2';
import QuestionAiBox from './QuestionAiBox';
import { setAnswer } from '../store/answersSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import InputCheckBox from './InputCheckBox';
import InputPercentage from './InputPercentage';
import InputCalendar from './InputCalendar';
import dayjs from 'dayjs';
import InputAmount from './InputAmount';
import InputListBox from './InputListBox';

const SectionTwoStep4 = ({
  currentBusinessPlanId,
  handleBack,
}: {
  currentBusinessPlanId: string | undefined;
  handleBack: () => void;
}) => {
  const dispatch = useAppDispatch();

  const answers = useAppSelector((state) => state.answers.answers);
  const isSetTrue = answers['410'] === 'true';

  const handleInputChange = (rowNumber: string, value: unknown) => {
    dispatch(
      setAnswer({
        rowNumber,
        value,
        businessPlanId: currentBusinessPlanId,
      })
    );
  };

  const starting_date = answers['9'] ? answers['9'] : '28/09/2022';
  console.log(starting_date);

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
          <div className="text-[24px] font-bold">Combien coûte les murs ?</div>
        </div>
        <div className="flex items-center text-[#A08FB1] text-[16px] ps-[38px] mr-[150px] mb-[28px] font-plus-jakarta-sans font-[500]">
          Déterminez ici votre masse salariale de manière intelligente, qui va
          travailler pour vous ? Et à combien ?
        </div>
      </div>

      <div className="overflow-y-scroll py-[5px] overflow-x-hidden px-2 qb-thumb h-[500px] mb-[10px]">
        <div className="w-full sm:px-[35spx] mb-[24px]">
          <div className="flex items-center justify-between">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Souhaitez-vous raisonner en % du chiffres d’affaires pour votre
              loyer ?
            </label>
          </div>
          <InputCheckBox
            value={true}
            onChange={(boolValue) => handleInputChange('410', boolValue)}
          />

          <div className="px-[16px] mt-[8px] text-[#41245E] opacity-50 text-[14px]">
            Ce raisonnement vous permet d’établir un budget facilement pour
            votre masse salariale en fonction de votre chiffre d’affaires estimé
          </div>
        </div>

        {!isSetTrue && (
          <div className="w-full sm:px-[35spx] mb-[24px]">
            <div className="flex items-center justify-between">
              <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
                Quelle est la fréquence du paiement du loyer ?
              </label>
            </div>
            <InputListBox
              value={
                answers['406'] ? { name: answers['406'] } : { name: 'Mensuel' }
              }
              options={[
                { name: 'Mensuel' },
                { name: 'Trimestriel' },
                { name: 'Annuel' },
              ]}
              onChange={(selectedOption) => {
                handleInputChange('406', selectedOption.name);
                // console.log("Selected option : ", selectedOption);
              }}
            />
          </div>
        )}

        {isSetTrue && (
          <div className="w-full sm:px-[35spx] mb-[10px]">
            <div className="flex items-center justify-between">
              <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
                Quel est le pourcentage sur le chiffre d’affaires que vous
                souhaitez attribuer au loyer ?
              </label>
            </div>
            <InputPercentage
              coloredAiBorder={true}
              value={answers['411'] ? answers['411'] : '0%'}
              onChange={(value) => handleInputChange('411', value)}
            />

            <div className="mt-[10px] mb-6">
              <QuestionAiBox
                message={`En moyenne les sociétés dans votre industrie dépensent 8% du chiffre d’affaire total dans leur loyer. Attention, le loyer du siège (s’il y en a un) n’est pas inclus dans ce loyer. On appelle ça, le taux d’effort. Pour rappel, la date de création de votre activité est le ${starting_date}.`}
              />
            </div>
          </div>
        )}

        {!isSetTrue && (
          <div className="w-full sm:px-[35spx] mb-[10px]">
            <div className="flex items-center justify-between">
              <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
                Quel est le montant du loyer ?
              </label>
            </div>

            <InputAmount
              coloredAiBorder={true}
              value={answers['409'] ?? 0}
              onChange={(value) => handleInputChange('409', value.toString())}
            />

            <div className="mt-[10px] mb-6">
              <QuestionAiBox
                message={`Pour la surface annoncée, en fonction de votre localisation nous identifions que le loyer en moyenne au m2 est de 298€/m2 donc votre loyer doit être environ de 2589€ par mois. Attention, le loyer du siège (s’il y en a un) n’est pas inclus dans ce loyer. Pour rappel, la date de création de votre activité est le ${starting_date}.`}
              />
            </div>
          </div>
        )}

        <div className="w-full sm:px-[35spx] mb-[10px]">
          <div className="flex items-center justify-between">
            <label className="block px-[16px] mb-[16px] text-[14px] text-foundation-purple-dark-active">
              Quelle est la date de prise à bail ?
            </label>
          </div>
          <InputCalendar
            value={dayjs()}
            onChange={(date) => {
              const formattedDate = date ? date.format('DD/MM/YYYY') : null;
              handleInputChange('407', formattedDate);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SectionTwoStep4;
