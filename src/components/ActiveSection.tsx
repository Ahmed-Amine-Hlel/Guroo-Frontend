import BarWrapper from './BarComponents/BarWrapper';
import ClubWrapper from './ClubComponents/ClubWrapper';
import LoungeWrapper from './LoungeComponents/LoungeWrapper';
import RestaurantWrapper from './RestaurantComponents/RestaurantWrapper';
import BeachClubWrapper from './BeachClubComponents/BeachClubWrapper';
import SectionOneStep1 from './SectionOneStep1';
import SectionOneStep2 from './SectionOneStep2';
import SectionOneStep3 from './SectionOneStep3';
import SectionOneStep4 from './SectionOneStep4';
import SectionTwoStep1 from './SectionTwoStep1';
import SectionTwoStep2 from './SectionTwoStep2';
import SectionTwoStep3 from './SectionTwoStep3';
import SectionTwoStep4 from './SectionTwoStep4';

type ActiveSectionProps = {
  activeSection: number;
  activeBusinessType: string;
  currentBusinessPlanId: string | undefined;
  handleBack: () => void;
  subStep: number;
  setIsCompact: React.Dispatch<React.SetStateAction<boolean>>;
  isBeachClubSelected: boolean;
  isRestaurantSelected: boolean;
  isBarSelected: boolean;
  isClubSelected: boolean;
  isLoungeSelected: boolean;
};

const ActiveSection = ({
  activeBusinessType,
  activeSection,
  currentBusinessPlanId,
  handleBack,
  setIsCompact,
  subStep,
  isBeachClubSelected,
  isBarSelected,
  isClubSelected,
  isLoungeSelected,
  isRestaurantSelected,
}: ActiveSectionProps) => {
  switch (activeSection) {
    case 1:
      // setIsCompact(false);
      // dispatch(setCurrentStep(1));
      return <SectionOneStep1 currentBusinessPlanId={currentBusinessPlanId} />;
    case 2:
      return (
        <SectionOneStep2
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );
    case 3:
      return (
        <SectionOneStep3
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );
    case 4:
      return (
        <SectionOneStep4
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );
    case 5:
      // dispatch(setCurrentStep(2));
      return <SectionTwoStep1 currentBusinessPlanId={currentBusinessPlanId} />;

    case 6:
      if (activeBusinessType === 'Restaurant' && isRestaurantSelected) {
        return (
          <RestaurantWrapper
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
            subStep={subStep}
          />
        );
      }
      if (activeBusinessType === 'Bar' && isBarSelected) {
        return (
          <BarWrapper
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
            subStep={subStep}
          />
        );
      }
      if (activeBusinessType === 'Club' && isClubSelected) {
        return (
          <ClubWrapper
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
            subStep={subStep}
          />
        );
      }
      if (activeBusinessType === 'Lounge' && isLoungeSelected) {
        return (
          <LoungeWrapper
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
            subStep={subStep}
          />
        );
      }
      if (activeBusinessType === 'Beach Club' && isBeachClubSelected) {
        return (
          <BeachClubWrapper
            currentBusinessPlanId={currentBusinessPlanId}
            handleBack={handleBack}
            subStep={subStep}
          />
        );
      }
      return null;
    default:
      return null;

    case 7:
      return (
        <SectionTwoStep2
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );

    case 8:
      return (
        <SectionTwoStep3
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );

    case 9:
      setIsCompact(true);
      return null;

    case 10:
      setIsCompact(false);
      return (
        <SectionTwoStep4
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );

    case 11:
      setIsCompact(true);
      return null;

    case 12:
      setIsCompact(false);
      return <div> hello world</div>;
  }
};

export default ActiveSection;
