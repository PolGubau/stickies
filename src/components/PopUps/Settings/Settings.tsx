import { useState } from "react";
import ActionButton from "src/components/Buttons/ActionButton/ActionButton";
import Popup from "../Popup";
import { settingsData } from "./SettingsData";
import { SettingsStyled } from "./SettingsStyled";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import {
  actualSettings,
  changeStikiesLayoutActionCreator,
} from "src/redux/features/settingsSlice";
import { colors } from "src/styles/theme";

const Settings = () => {
  const dispatch = useAppDispatch();
  const [selectedSettings, setSelectedSettings] = useState(settingsData[0]);
  const { settings } = useAppSelector(actualSettings);
  const actualLayout = settings.stickiesLayout.settingValue;

  return (
    <Popup>
      <SettingsStyled>
        <h2>Settings</h2>
        <div className="settingsTypes">
          {settingsData.map((setting) => (
            <p
              key={setting.name}
              className={
                setting.name === selectedSettings.name ? "selected" : ""
              }
              onClick={() => setSelectedSettings(setting)}
            >
              {setting.name}
            </p>
          ))}
        </div>
        <section>
          <h3>{selectedSettings.name}</h3>
          {selectedSettings.name === "Appearance" && (
            <>
              <h4>Stickies Layout</h4>
              <div
                className={`optionsButtons
              ${actualLayout === "grid" ? "activeButton" : ""}`}
              >
                <div
                  onClick={() => {
                    dispatch(changeStikiesLayoutActionCreator("grid"));
                  }}
                >
                  <ActionButton
                    iconName="grid"
                    color={
                      actualLayout === "grid" ? colors.purple : colors.gray
                    }
                  />
                </div>
                <div
                  onClick={() => {
                    dispatch(changeStikiesLayoutActionCreator("list"));
                  }}
                >
                  <ActionButton
                    iconName="list"
                    color={
                      actualLayout === "list" ? colors.purple : colors.gray
                    }
                  />
                </div>
              </div>
            </>
          )}
        </section>
      </SettingsStyled>
    </Popup>
  );
};

export default Settings;
