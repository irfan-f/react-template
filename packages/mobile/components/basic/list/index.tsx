import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Store } from '@mahjong/shared';
const { selectors } = Store;
import { Switch, TextInput, View, Text } from 'react-native';

import ListItem from './ListItem';
import { ListProps } from './types';

let lineItemsToDisplay;

function List({ listItems, listItemComponent }: ListProps): React.JSX.Element {
  const theme = useSelector(selectors.selectTheme);
  const { styles } = theme;
  lineItemsToDisplay = listItems.map((item, index) => {
    if (listItemComponent) {
      return listItemComponent(item, index);
    } else {
      return (
        <ListItem
          key={item.name}
          item={item}
          lines={index !== listItems.length - 1}
        />
      );
    }
  });
  return <View style={styles.list}>{lineItemsToDisplay}</View>;
}

export default List;
