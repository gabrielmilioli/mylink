import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const ModalContainer = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 0 16px;
  width: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 0;
`;

export const LinkArea = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #1ccbae;
`;

export const LongUrl = styled.Text`
  font-size: 16px;
  color: #a7a7a7;
  margin-bottom: 32px;
`;

export const ShortLinkArea = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  background-color: #172742;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
`;

export const ShortLinkUrl = styled.Text`
  width: 90%;
  color: #fff;
  font-size: 16px;
`;