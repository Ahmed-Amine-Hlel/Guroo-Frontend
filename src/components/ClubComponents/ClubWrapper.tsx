import ClubComponent1 from "./ClubComponent1";
import ClubComponent2 from "./ClubComponent2";
import ClubComponent3 from "./ClubComponent3";
import ClubComponent4 from "./ClubComponent4";
import ClubComponent5 from "./ClubComponent5";

type ClubWrapperProps = {
  subStep: number;
  currentBusinessPlanId: string | undefined;
  handleBack: () => void;
};

const ClubWrapper = ({
  currentBusinessPlanId,
  handleBack,
  subStep,
}: ClubWrapperProps) => {
  switch (subStep) {
    case 0:
      return (
        <ClubComponent1
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );

    case 1:
      return <ClubComponent2 handleBack={handleBack} />;
    case 2:
      return (
        <ClubComponent3
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );
    case 3:
      return (
        <ClubComponent4
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );

    case 4:
      return (
        <ClubComponent5
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );
    default:
      return null;
  }
};

export default ClubWrapper;
