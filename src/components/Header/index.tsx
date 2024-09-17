import React from 'react';
import {
  Pressable,
  TextStyle,
  ViewStyle,
  Animated,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Texto from '../Texto';
// import { HEADER_HEIGHT } from '../../layouts/PageLayout';
import classNames from '../../utils/classNames';

const HEADER_HEIGHT = 80

type HeaderLeftProps = {
  style?: ViewStyle;
  className?: string;
  children: React.ReactNode;
  onPress: () => void;
};

type HeaderRightProps = {
  style?: ViewStyle;
  className?: string;
  children: React.ReactNode;
  onPress: () => void;
};

type HeaderTitle = {
  style?: TextStyle;
  className?: string;
  children: React.ReactNode;
  icon?: string
};

type HeaderProps = {
  style?: ViewStyle;
  className?: string;
  offSet?: Animated.Value;
  children: React.ReactNode | React.ReactNode[];
  transparent?: boolean;
};



const HeaderLeft = ({ onPress, children, style }: HeaderLeftProps) => {
  return (
    <Pressable
      className="justify-end p-4"
      style={style}
      onPress={onPress}>
      {children}
    </Pressable>
  );
};

const HeaderRight = ({ onPress, children, style }: HeaderRightProps) => {
  return (
    <Pressable
      className="justify-end p-4"
      style={style}
      onPress={onPress}>
      {children}
    </Pressable>
  );
};

const HeaderTitle = ({ style, children}: HeaderTitle) => {
  return (
    <View className='flex-1 justify-end items-start p-4 -z-10' style={style}>
      <Texto.Grande classNameTexto="text-white font-medium">
        {children}
      </Texto.Grande>
    </View>
  );
};

const Header = ({ children, offSet, className, transparent }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const headerHeight =
    offSet?.interpolate({
      inputRange: [0, HEADER_HEIGHT + insets.top],
      outputRange: [0, -HEADER_HEIGHT - insets.top],
      extrapolate: 'clamp',
    }) ?? 0;

  return (
    <Animated.View
      pointerEvents={'box-none'}
      className={classNames('absolute top-0 right-0 left-0 flex-row items-end bg-slate-700 transition-all duration-500', className)}
      style={
        [offSet
          ? {
            height: HEADER_HEIGHT + insets.top,
            transform: [{ translateY: headerHeight }],
          }
          : { height: HEADER_HEIGHT + insets.top }, transparent && {backgroundColor: 'transparent'}]
      }>
      {children}
    </Animated.View>
  );
};

Header.HeaderLeft = HeaderLeft;
Header.HeaderRight = HeaderRight;
Header.HeaderTitle = HeaderTitle;

export default Header;
