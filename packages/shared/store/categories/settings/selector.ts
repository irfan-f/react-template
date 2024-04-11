import { RootState } from "../../selectors";
import { SettingsState } from "../../../info/settings";

const selectSettings: (state: RootState) => SettingsState = state => state.settings;

export default selectSettings;
