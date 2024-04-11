const settings = {
  appearance: {
    name: 'Appearance',
    type: 'select',
    default: { label: 'System Default', value: 'auto' },
    value: { label: 'System Default', value: 'auto'},
    options: [
      { label: 'Dark', value: 'dark' },
      { label: 'Light', value: 'light' },
      { label: 'System Default', value: 'auto' },
    ],
  },
  theme: {
    name: 'Theme',
    type: 'color',
    default: { value: '#009688' },
    value: { value: '#009688' },
  }
};

export type SettingsState = typeof settings;

export default settings;
