import BarComponent1 from "./BarComponent1";
import BarComponent2 from "./BarComponent2";
import BarComponent3 from "./BarComponent3";
import BarComponent4 from "./BarComponent4";
import BarComponent5 from "./BarComponent5";

type BarWrapperProps = {
  subStep: number;
  currentBusinessPlanId: string | undefined;
  handleBack: () => void;
};

const BarWrapper = ({
  currentBusinessPlanId,
  handleBack,
  subStep,
}: BarWrapperProps) => {
  switch (subStep) {
    case 0:
      return (
        <BarComponent1
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );

    case 1:
      return <BarComponent2 handleBack={handleBack} />;
    case 2:
      return (
        <BarComponent3
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );
    case 3:
      return (
        <BarComponent4
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );

    case 4:
      return (
        <BarComponent5
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );
    default:
      return null;
  }
};

export default BarWrapper;
