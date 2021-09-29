import styled from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';

export const ButtonMenu = styled.TouchableOpacity`
  top: ${Platform.OS === 'ios' ? (StatusBar.currentHeight + 60) + 'px' : '10px'};
  position: absolute;
`;