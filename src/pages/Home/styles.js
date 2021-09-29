import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === 'ios' ? '32px' : '16px'};
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const ContainerContent = styled.View`
  margin-top: ${Platform.OS === 'ios' ? '22%' : '16%'};
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #fff;
  padding-bottom: 10%;
  text-align: center;
`;

export const ContainerInput = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  border-radius: 8px;
  margin: 16px 0;
  padding: 0 16px;
`;

export const BoxIcon = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 8px;
  width: 16%;
  height: 64px;
  background-color: rgba(255,255,255,0.15);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Input = styled.TextInput`
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 84%;
  height: 64px;
  padding: 8px;
  background-color: rgba(255,255,255,0.15);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 18px;
`;

export const ButtonLink = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 52px;
  background-color: #fff;
  padding: 8px;
  margin: 0 16px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const ButtonLinkText = styled.Text`
  font-size: 18px;
`;