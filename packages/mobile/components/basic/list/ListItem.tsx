import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Platform } from 'react-native';
import ModalWrapper from '../modal';
import ColorPicker, {
  Preview,
  Panel1,
  HueSlider,
} from 'reanimated-color-picker';

import { useSelector } from 'react-redux';

import Button from '../button';

import { Store } from '@mahjong/shared';
const { selectors } = Store;
import Select from '../select';
import { useSharedValue } from 'react-native-reanimated';

function ListItem({ item, lines }) {
  const [showModal, setShowModal] = useState(false);
  const sharedValue = useSharedValue({ value: item.value });
  const theme = useSelector(selectors.selectTheme);
  const { styles, colors } = theme;
  const [itemValue, setItemValue] = useState(item.value);

  let itemInput = <TextInput />;
  switch (item.input) {
    case 'checkbox':
      itemInput = (
        <Switch
          style={[styles.justifyRight]}
          value={itemValue}
          onValueChange={val => {
            item.onValue(val);
            setItemValue(val);
          }}
        />
      );
      break;
    case 'select':
      switch (Platform.OS) {
        case 'android':
          console.log('android');
          break;
        case 'ios':
        default:
          itemInput = (
            <Select
              options={item.options}
              onSelect={val => {
                item.onValue(val);
                setItemValue(val);
              }}
              selectedValue={itemValue}
              onCancel={() => {}}
            />
          );
      }
      break;
    case 'number':
      itemInput = <TextInput />;
      break;
    case 'color':
      itemInput = (
        <>
          <Button
            icon={'color-lens'}
            onPress={() => setShowModal(true)}
            border={'full'}
          />
          <ModalWrapper showModal={showModal} setShowModal={setShowModal}>
            <>
              <ColorPicker
                value={colors.primary}
                style={{ borderRadius: 0 }}
                onChange={color => (sharedValue.value = color)}>
                <Panel1 style={{ borderRadius: 0 }} />
                <Preview style={{ borderRadius: 0 }} hideText={true} />
                <HueSlider style={{ borderRadius: 0, height: 30 }} />
              </ColorPicker>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 10,
                }}>
                <Button
                  fill="outline"
                  title="Close Modal"
                  onPress={() => {
                    setShowModal(false);
                  }}
                />
                <Button
                  fill="outline"
                  title="Confirm"
                  onPress={() => {
                    item.onValue({ value: sharedValue.value.hex });
                    setItemValue({ value: sharedValue.value.hex });
                    setShowModal(false);
                  }}
                />
              </View>
            </>
          </ModalWrapper>
        </>
      );
      break;
    default:
      break;
  }
  const lineStyle = lines
    ? { borderBottomWidth: 1, borderColor: colors.detail }
    : { borderBottomWidth: 0 };
  return (
    <View style={[styles.listItem, lineStyle]}>
      <Text style={[styles.h3, styles.textLeft, { flex: 2 }]}>{item.name}</Text>
      <View style={[styles.row, styles.justifyRight, { flex: 1 }]}>
        {itemInput}
      </View>
    </View>
  );
}

export default ListItem;
