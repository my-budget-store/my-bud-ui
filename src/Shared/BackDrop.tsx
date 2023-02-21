import "./Shared.css";

export const BackDrop = (props: any) => {

  const clickBackDropHandler = () => {
    if (props.ShowMenuSideDrawer) {
      props.ShowMenuSideDrawer(false);
    }
    if (props.ShowAccountSideDrawer) {
      props.ShowAccountSideDrawer(false);
    }
  };

  return <div className="back-drop-div" onClick={clickBackDropHandler} />;
}
