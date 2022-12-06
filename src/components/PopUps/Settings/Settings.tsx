import { useState } from "react";
import ActionButton from "src/components/Buttons/ActionButton/ActionButton";
import Popup from "../Popup";
import { settingsData } from "./SettingsData";
import { SettingsStyled } from "./SettingsStyled";

const Settings = () => {
  const [selectedSettings, setSelectedSettings] = useState(settingsData[0]);
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
          {selectedSettings && (
            <>
              <h4>Stickies Layout</h4>
              <div className="optionsButtons">
                <ActionButton iconName="grid" />
                <ActionButton iconName="list" />
              </div>
            </>
          )}
        </section>
      </SettingsStyled>
    </Popup>
  );
};

export default Settings;
