import React, { useState } from 'react';
import { ModalContainer, Container, Header, LinkArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl } from './styles';
import { Feather } from '@expo/vector-icons';
import { View, TouchableOpacity, TouchableWithoutFeedback, Share } from 'react-native';
import { setString } from 'expo-clipboard';

export default function ModalLink({ onClose, data }) {

  const link = data.link;
  const long_url = data.long_url;

  const handleCopyLink = () => {
    setString(link);
    alert('Copied to clipboard');
  }

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Shared link: ${link}`
      });

      if (result.action !== Share.sharedAction) {
        return;
      }

      if (result.activityType) {
        return;
      }

      alert('Link was shared');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <Container>
        <Header>
          <TouchableOpacity
            onPress={onClose}
          >
            <Feather
              name="x"
              color="#212743"
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleShare}
          >
            <Feather
              name="share"
              color="#212743"
              size={30}
            />
          </TouchableOpacity>
        </Header>

        <LinkArea>
          <Title>Shortened link</Title>

          <LongUrl
            numberOfLines={1}
          >{long_url}</LongUrl>

          <ShortLinkArea
            activeOpacity={1}
            onPress={handleCopyLink}
          >
            <ShortLinkUrl
              numberOfLines={1}
            >
              {link}
            </ShortLinkUrl>

            <TouchableOpacity
              onPress={handleCopyLink}
            >
              <Feather
                name="copy"
                color="#fff"
                size={24}
              />
            </TouchableOpacity>
          </ShortLinkArea>

        </LinkArea>
      </Container>
    </ModalContainer>
  );
}