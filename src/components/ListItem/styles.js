import styled from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';

export const ContainerButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: rgba(255,255,255,0.25);
  margin: 8px 16px;
  padding: 16px;
  border-radius: 8px;
`;

export const Item = styled.Text`
  color: #fff;
  padding-left: 16px;
  padding-right: 8px;
  font-size: 18px;
`;

export const ActionContainer = styled.TouchableOpacity`
  width: 64px;
  background-color: #ff5555;
  justify-content: center;
  align-items: center;
  margin: 8px 16px;
  border-radius: 8px;
`;