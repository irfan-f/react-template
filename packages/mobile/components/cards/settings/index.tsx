import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from '@mahjong/shared';
const { selectors } = Store;
import Card from '../../basic/card';
import List from '../../basic/list';

import { actions } from '@mahjong/shared/store/reducers/settings';

function SecurityCard(): React.JSX.Element {
  const dispatch = useDispatch();
  const settings = useSelector(selectors.selectSettings);

  return (
    <Card title="Settings">
      <List
        listItems={Object.values(settings).map(setting => {
          return {
            name: setting.name,
            input: setting.type,
            value: setting?.value || setting?.default,
            onValue: val => {
              dispatch(
                actions[
                  `set${
                    setting.name.charAt(0).toUpperCase() + setting.name.slice(1)
                  }`
                ](val),
              );
            },
            options: 'options' in setting ? setting.options : [],
          };
        })}
      />
    </Card>
  );
}

export default SecurityCard;
