import { useState } from "react";
import ActionButton from "src/components/Buttons/ActionButton/ActionButton";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import {
  setPasswordActionCreator,
  popupsState,
  closeAllPopupsActionCreator,
  changeShowingPrivateActionCreator,
  togglePopupActionCreator,
} from "src/redux/features/popupSlice";
import Popup from "../Popup";
import { PrivateLoginPopupStyled } from "./PrivateLoginPopupStyled";
import { GoAlert } from "react-icons/go";

const PrivateLoginPopUp = () => {
  const dispatch = useAppDispatch();
  const popupState = useAppSelector(popupsState);

  const { password } = popupState.privateLogin;

  const prevPassword = password.length > 0 ? password : null;
  const [newPassword, setNewPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const saveNewPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPassword.length <= 10 && newPassword.length > 3) {
      dispatch(setPasswordActionCreator(newPassword));
      dispatch(changeShowingPrivateActionCreator(true));
      dispatch(closeAllPopupsActionCreator());
    } else {
      alert("Password must be 4 - 10 digits long");
    }
  };
  const handleCheckPassword = (e: any) => {
    e.preventDefault();
    if (checkPassword === password) {
      dispatch(changeShowingPrivateActionCreator(true));
      dispatch(closeAllPopupsActionCreator());
    } else {
      alert("Password is incorrect");
    }
    setCheckPassword("");
  };
  const handleDeletePassword = () => {
    window.confirm("Are you sure you want to reset your private Stickies?") &&
      dispatch(setPasswordActionCreator(""));
    dispatch(changeShowingPrivateActionCreator(false));
    dispatch(closeAllPopupsActionCreator());
    dispatch(togglePopupActionCreator("privateLogin"));
  };

  return (
    <Popup>
      <PrivateLoginPopupStyled>
        <h2>Private Stickies</h2>
        {prevPassword ? (
          <div>
            <p>Enter your password</p>
            <form className="form" onSubmit={handleCheckPassword}>
              <input
                value={checkPassword}
                onChange={(e) => {
                  setCheckPassword(e.target.value);
                }}
                minLength={4}
                maxLength={9}
                max={999999999}
                min={999}
                autoFocus
                required
                type="number"
              />
              <ActionButton type="submit" iconName="send" />
            </form>
            <div className="resetPasswordContainer">
              <p>Can't remember your password?</p>
              <button onClick={handleDeletePassword}>
                <GoAlert />
                Reset my private Stickies
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p>Create a password</p>
            <form className="form" onSubmit={saveNewPassword}>
              <input
                autoFocus
                required
                onChange={(e) => setNewPassword(e.target.value)}
                minLength={4}
                maxLength={4}
                value={newPassword}
                type="number"
              />
              <ActionButton type="submit" iconName="send" />
            </form>
          </div>
        )}
      </PrivateLoginPopupStyled>
    </Popup>
  );
};

export default PrivateLoginPopUp;
