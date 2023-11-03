import LoungeComponent1 from "./LoungeComponent1";
import LoungeComponent2 from "./LoungeComponent2";
import LoungeComponent3 from "./LoungeComponent3";
import LoungeComponent4 from "./LoungeComponent4";
import LoungeComponent5 from "./LoungeComponent5";

type LoungeWrapperProps = {
  subStep: number;
  currentBusinessPlanId: string | undefined;
  handleBack: () => void;
};

const LoungeWrapper = ({
  currentBusinessPlanId,
  handleBack,
  subStep,
}: LoungeWrapperProps) => {
  switch (subStep) {
    case 0:
      return (
        <LoungeComponent1
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );

    case 1:
      return <LoungeComponent2 handleBack={handleBack} />;
    case 2:
      return (
        <LoungeComponent3
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );
    case 3:
      return (
        <LoungeComponent4
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );

    case 4:
      return (
        <LoungeComponent5
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );
    default:
      return null;
  }
};

export default LoungeWrapper;
