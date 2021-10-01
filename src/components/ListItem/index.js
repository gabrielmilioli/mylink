import React from 'react';
import { View } from 'react-native';
import { ContainerButton, Item, ActionContainer } from './styles';
import { Feather } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';

export default function ListItem({ data, handleOnPress, handleOnRemove }) {

  const RightActions = () => {
    return (
      <ActionContainer
        onPress={() => handleOnRemove(data.id)}
      >
        <Feather 
          name="trash"
          color="#fff"
          size={24}
        />
      </ActionContainer>
    );
  };

  return (
    <View>
      <Swipeable
        renderRightActions={RightActions}
      >
        <ContainerButton
          activeOpacity={0.9}
          onPress={() => handleOnPress(data)}
        >
          <Feather
            name="link"
            color="#fff"
            size={24}
          />
          <Item
            numberOfLines={1}
          >
            {data.long_url}
          </Item>
        </ContainerButton>
      </Swipeable>
    </View>
  );
}