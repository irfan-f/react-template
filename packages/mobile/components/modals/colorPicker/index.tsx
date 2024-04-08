import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { Store } from '@mahjong/shared';
const { selectors } = Store;

import ColorPicker, {
  Panel1,
  Preview,
  HueSlider,
} from 'reanimated-color-picker';
import ModalWrapper from '../../basic/modal';

function ColorPickerModal({ showModal, setShowModal }): React.JSX.Element {
  const theme = useSelector(selectors.selectTheme);
  const { styles, colors } = theme;

  const onColorSelected = color => {
    console.log(color);
  };

  return (
    <ModalWrapper showModal={showModal} setShowModal={setShowModal}>
      <>
        <ColorPicker
          value={colors.primary}
          onComplete={onColorSelected}
          style={{ borderRadius: 0 }}>
          <Preview style={{ borderRadius: 0 }} />
          <Panel1 style={{ borderRadius: 0 }} />
          <HueSlider style={{ borderRadius: 0 }} />
        </ColorPicker>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Button
            title="Close Modal"
            onPress={() => {
              setShowModal(false);
            }}
          />
          <Button
            title="Confirm"
            onPress={() => {
              console.log('Confirm');
            }}
          />
        </View>
      </>
    </ModalWrapper>
  );
}

export default ColorPickerModal;
