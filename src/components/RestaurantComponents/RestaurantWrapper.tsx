import RestaurantComponent1 from "./RestaurantComponent1";
import RestaurantComponent2 from "./RestaurantComponent2";
import RestaurantComponent3 from "./RestaurantComponent3";
import RestaurantComponent4 from "./RestaurantComponent4";
import RestaurantComponent5 from "./RestaurantComponent5";

type RestaurantWrapperProps = {
  subStep: number;
  currentBusinessPlanId: string | undefined;
  handleBack: () => void;
};

const RestaurantWrapper = ({
  subStep,
  currentBusinessPlanId,
  handleBack,
}: RestaurantWrapperProps) => {
  switch (subStep) {
    case 0:
      return (
        <RestaurantComponent1
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );

    case 1:
      return <RestaurantComponent2 handleBack={handleBack} />;
    case 2:
      return (
        <RestaurantComponent3
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );
    case 3:
      return (
        <RestaurantComponent4
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );

    case 4:
      return (
        <RestaurantComponent5
          currentBusinessPlanId={currentBusinessPlanId}
          handleBack={handleBack}
        />
      );
    default:
      return null;
  }
};

export default RestaurantWrapper;
