import React from 'react';
import { Text, View } from 'react-native';
import StatusBarPage from '../../components/StatusBarPage';

export default function MyLinks() {
  return (
    <View>
      <StatusBarPage
        backgroundColor="#132742"
        barStyle="light-content"
      />
      <Text>Links</Text>
    </View>
  );
}