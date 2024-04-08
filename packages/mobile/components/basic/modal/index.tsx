/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Modal, View, Animated, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { Store } from '@mahjong/shared';
const { selectors } = Store;

const screenDimensions = Dimensions.get('window');
const defaultInitialModalHeight = Dimensions.get('window').height * 0.4;
const modalHeight = new Animated.Value(defaultInitialModalHeight);

const defaultMaxModalHeight = screenDimensions.height * 0.9;
const defaultMinModalHeight = screenDimensions.height * 0.2;
const defaultHeightIntervals =
  (defaultMaxModalHeight - defaultMinModalHeight) / 5;


const defaultModalOptions = {
  draggableHandle: true,
  snapToInitialHeight: true,
  initialHeight: defaultInitialModalHeight,
  minModalHeight: defaultMinModalHeight,
  maxModalHeight: defaultMaxModalHeight,
  heightIntervals: defaultHeightIntervals,
};

export type ModalOptions = {
  draggableHandle?: boolean;
  initialHeight?: number;
  snapToInitialHeight?: boolean;
  minModalHeight?: number;
  maxModalHeight?: number;
  heightIntervals?: number;
};

function returnToHeight(options: ModalOptions = defaultModalOptions): void {

  let heightToReturnTo: number;
  if (options.snapToInitialHeight) {
    heightToReturnTo = options.initialHeight || defaultInitialModalHeight;
  } else {
    heightToReturnTo =
      modalHeight._value -
      (modalHeight._value %
        (options.heightIntervals || defaultHeightIntervals));
  }
  Animated.timing(modalHeight, {
    toValue: heightToReturnTo,
    duration: 200,
    useNativeDriver: false,
  }).start();
}


/**
 * A modal component that can be used to display content in a modal
 * @param showModal - A boolean that determines if the modal should be displayed
 * @param setShowModal - A function that sets the showModal state
 * @param options - An object that contains the options for the modal
 * @param options.draggableHandle - A boolean that determines if the modal can be dragged, default is true
 * @param options.snapToInitialHeight - A boolean that determines if the modal should snap to the initial height, default is true
 * @param options.minModalHeight - A number that determines the minimum height of the modal, default is 20% of the screen height
 * @param options.maxModalHeight - A number that determines the maximum height of the modal, default is 90% of the screen height
 * @param options.heightIntervals - A number that determines the height intervals of the modal, default is 14% of the screen height
 * @param children - The content of the modal
 * @returns - A modal component
 */
function ModalWrapper({
  showModal,
  setShowModal,
  options,
  children,
}: {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  options?: ModalOptions;
  children: React.ReactNode;
}): React.JSX.Element {
  // Used to capture the safe area insets which adjusts elements based on the device's notch
  const insets = useSafeAreaInsets();
  // Used to determine if the pan gesture handler should triggert to adjust the modal height
  const [animateModalHeight, setAnimateModalHeight] = useState(false);
  // Used to set the gesture capturing for modal height adjustment
  const pan =
    options?.draggableHandle || true
      ? Gesture.Pan()
          .enabled(animateModalHeight)
          .runOnJS(true)
          .onUpdate(({ velocityY, y }) => {
            // If the user swipes down, close the modal
            if (velocityY > 2000) {
              setShowModal(false);
            }
            const touchY = Dimensions.get('window').height - insets.bottom - y;
            const newHeight = Math.max(
              options?.minModalHeight || defaultMinModalHeight,
              Math.min(
                touchY,
                options?.maxModalHeight || defaultMaxModalHeight,
              ),
            );
            Animated.timing(modalHeight, {
              toValue: newHeight,
              duration: 0,
              useNativeDriver: false,
            }).start();
          })
          .onEnd(() => {
            setAnimateModalHeight(false);
            returnToHeight(options);
          })
      : Gesture.Pan()
          .onUpdate(() => {})
          .onEnd(() => {});

  const theme = useSelector(selectors.selectTheme);
  const { styles, colors } = theme;

  return (
    <Modal
      visible={showModal}
      animationType="slide"
      presentationStyle="overFullScreen"
      style={{
        shadowColor: colors.backgroundOpposite,
        shadowOffset: {
          width: 1,
          height: 2,
        },
      }}
      transparent={true}>
      {/* Handles the gesture */}
      <GestureDetector gesture={pan}>
        {/* Main container that covers the screen */}
        <Animated.View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          {/* The visible portion of the modal*/}
          <View
            style={{
              width: '100%',
              borderRadius: 5,
              backgroundColor: colors.backgroundTint,
              paddingTop: 10,
            }}>
            {/* The draggable handle container */}
            <View
              hitSlop={{
                top: 20,
                bottom: 10,
                left: screenDimensions.width,
                right: screenDimensions.width,
              }}
              onTouchStart={() => {
                setAnimateModalHeight(true);
              }}
              style={{
                width: '100%',
                height: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* The draggable handle */}
              <View
                style={{
                  width: '20%',
                  height: '100%',
                  backgroundColor: colors.backgroundShade,
                  borderRadius: 2.5,
                  marginBottom: 10,
                }}
              />
            </View>
            {/* The content of the modal */}
            <Animated.View
              style={{
                width: '100%',
                height: modalHeight,
              }}>
              {children}
            </Animated.View>
          </View>
        </Animated.View>
      </GestureDetector>
    </Modal>
  );
}

export default ModalWrapper;
