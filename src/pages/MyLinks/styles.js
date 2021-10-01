import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.ScrollView`
  background-color: #132742;
`;

export const Title = styled.Text`
  margin-top: ${Platform.OS === 'ios' ? '35%' : '20%'};
  margin-left: 16px;
  font-size: 32px;
  font-weight: bold;
  color: #fff;
`;

export const ListLink = styled.FlatList`
  padding-bottom: 16px;
`;

export const ContainerEmpty = styled.View`
  margin-top: 16px;
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  color: #fff;
  font-size: 18px;
`;