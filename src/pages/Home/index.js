import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import { ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput, BoxIcon, Input, ButtonLink, ButtonLinkText } from './styles';

import { Feather } from '@expo/vector-icons';

export default function Home() {
  return (
    <LinearGradient
      colors={['#1ddbb9', '#132742']}
      style={{
        flex: 1,
        justifyContent: 'center'
      }}
    >
      <StatusBarPage
        backgroundColor="#1ddbb9"
        barStyle="light-content"
      />
      {/* 
      <Menu />
 */}

      <ContainerLogo>
        <Logo source={require('../../assets/logo.png')} resizeMode="contain" />
      </ContainerLogo>

      <ContainerContent>
        <Title>
          Link shortener
        </Title>
        <SubTitle>
          Paste your link here
        </SubTitle>

        <ContainerInput>
          <BoxIcon>
            <Feather name="link" size={22} color="#fff" />
          </BoxIcon>
          <Input 
            placeholder="Paste your link here"
            placeholderTextColor="#fff"
          />
        </ContainerInput>

        <ButtonLink>
          <ButtonLinkText>Shorten</ButtonLinkText>
        </ButtonLink>

      </ContainerContent>

    </LinearGradient>
  );
}