import { useDispatch } from "react-redux";
import {
  toggleMenuSideDrawer,
  toggleAccountSideDrawer,
} from "redux/slices/sideDrawerSlice";
import "styles/backDrop.css";

export const BackDrop = () => {
  const dispatch = useDispatch();
  const clickBackDropHandler = () => {
    dispatch(toggleAccountSideDrawer(false));
    dispatch(toggleMenuSideDrawer(false));
  };

  return <div className="back-drop" onClick={clickBackDropHandler} />;
};
