import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import { ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput, BoxIcon, Input, ButtonLink, ButtonLinkText } from './styles';
import { Feather } from '@expo/vector-icons';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal, ActivityIndicator } from 'react-native';
import ModalLink from '../../components/ModalLink';
import api from '../../services/api';
import { save } from '../../utils/StoreLinks';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({});

  const handleShortenLink = () => {
    if (input.trim() === '') {
      return;
    }

    setLoading(true);

    api.shorten.new(input)
      .then(response => {
        setData(response.data);
        save(response.data);

        setInput('');
        setModalVisible(!modalVisible);
      })
      .catch(err => {
        alert('Something went wrong...');
      })
      .finally(() => {
        Keyboard.dismiss();
        setLoading(false);
      });
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
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

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : 'padding'}
          enabled
        >
          <ContainerLogo>
            <Logo source={require('../../assets/logo.png')} resizeMode="contain" />
          </ContainerLogo>

          <ContainerContent>
            <Title>
              Link shortener
            </Title>
            <SubTitle>
              Shorten your link
            </SubTitle>

            <ContainerInput>
              <BoxIcon>
                <Feather name="link" size={22} color="#fff" />
              </BoxIcon>
              <Input
                placeholder="Paste your link here"
                placeholderTextColor="#fff"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                value={input}
                onChangeText={setInput}
              />
            </ContainerInput>

            <ButtonLink
              onPress={handleShortenLink}
              disabled={!input}
            >
              {loading ? <ActivityIndicator color="#132742" size={24} /> : <ButtonLinkText>Shorten</ButtonLinkText>}

            </ButtonLink>

          </ContainerContent>
        </KeyboardAvoidingView>

        <Modal
          visible={modalVisible}
          transparent
          animationType="slide"
        >
          <ModalLink onClose={() => setModalVisible(false)} data={data} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}