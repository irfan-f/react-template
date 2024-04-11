import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as themeActions } from '@mahjong/shared/store/categories/theme/reducer';
import { Store } from '@mahjong/shared';

const { selectors } = Store;

function useThemeEffect(colorScheme: any = null) {
  const dispatch = useDispatch();
  const settingsSelector = useSelector(selectors.selectSettings);
  const themeSelector = useSelector(selectors.selectTheme);

  useEffect(() => {
    const currentTheme = themeSelector.theme;
    const futureTheme =
      settingsSelector.appearance.value.value === 'auto'
        ? colorScheme
        : settingsSelector.appearance.value.value;
    if (currentTheme !== futureTheme) {
      dispatch(themeActions.setTheme({ theme: futureTheme }));
    }
  }, [
    settingsSelector.appearance.value,
    colorScheme,
    dispatch,
    themeSelector.theme,
  ]);

  useEffect(() => {
    const currentPrimary = themeSelector.colors.primary;
    const futurePrimary = settingsSelector.theme.value.value;
    if (currentPrimary !== futurePrimary) {
      dispatch(themeActions.setColor({ primary: futurePrimary }));
    }
  }, [
    settingsSelector.theme.value.value,
    dispatch,
    themeSelector.colors.primary,
  ]);
}

export { useThemeEffect };