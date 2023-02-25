import "Styles/BackDrop.css";

export const BackDrop = (props: any) => {
  const clickBackDropHandler = () => {
    if (props.ToggleMenuSideDrawer) {
      props.ToggleMenuSideDrawer(false);
    }
    if (props.ToggleAccountSideDrawer) {
      props.ToggleAccountSideDrawer(false);
    }
  };

  return <div className="back-drop" onClick={clickBackDropHandler} />;
};
