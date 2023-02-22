import "Shared/Shared.css";

export const BackDrop = (props: any) => {
  const clickBackDropHandler = () => {
    if (props.ToggleMenuSideDrawer) {
      props.ToggleMenuSideDrawer(false);
    }
    if (props.ToggleAccountSideDrawer) {
      props.ToggleAccountSideDrawer(false);
    }
  };

  return <div className="back-drop-div" onClick={clickBackDropHandler} />;
};
