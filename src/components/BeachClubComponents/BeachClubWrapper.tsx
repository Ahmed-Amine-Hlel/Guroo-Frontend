import BeachClubComponent1 from "./BeachClubComponent1";
import BeachClubComponent2 from "./BeachClubComponent2";
import BeachClubComponent3 from "./BeachClubComponent3";
import BeachClubComponent4 from "./BeachClubComponent4";
import BeachClubComponent5 from "./BeachClubComponent5";

type BeachClubWrapperProps = {
  subStep: number;
  currentBusinessPlanId: string | undefined;
  handleBack: () => void;
};

const BeachClubWrapper = ({
  currentBusinessPlanId,
  handleBack,
  subStep,
}: BeachClubWrapperProps) => {
  switch (subStep) {
    case 0:
      return (
        <BeachClubComponent1
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );

    case 1:
      return <BeachClubComponent2 handleBack={handleBack} />;
    case 2:
      return (
        <BeachClubComponent3
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );
    case 3:
      return (
        <BeachClubComponent4
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );

    case 4:
      return (
        <BeachClubComponent5
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );
    default:
      return null;
  }
};

export default BeachClubWrapper;
