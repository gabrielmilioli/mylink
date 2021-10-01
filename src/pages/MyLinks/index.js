import { useIsFocused } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Modal, RefreshControl, LogBox, Alert } from 'react-native';
import ListItem from '../../components/ListItem';
import ModalLink from '../../components/ModalLink';
import StatusBarPage from '../../components/StatusBarPage';
import { all, remove } from '../../utils/StoreLinks';
import { Container, Title, ListLink, ContainerEmpty, EmptyText } from './styles';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

export default function MyLinks() {
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({});
  const isFocused = useIsFocused();
  const [refreshing, setRefreshing] = React.useState(false);

  const handlePressItem = (item) => {
    setData(item);
    setModalVisible(true);
  }

  const handleConfirmRemoveItem = (id) => {
    Alert.alert(
      'Remove link?',
      'This will permanently remove selected link',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Remove',
          onPress: () => handleRemoveItem(id),
          style: 'destructive'
        }
      ]
    );
  }

  const handleRemoveItem = async (id) => {
    const response = await remove(id);
    setLinks(response);
  }

  const getLinks = async () => {
    setLoading(true);
    setLinks(await all());
    setLoading(false);
  }

  useEffect(() => {
    getLinks();
  }, [isFocused]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getLinks();
    setRefreshing(false);
  }, []);

  return (
    <Container
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <StatusBarPage
        backgroundColor="#132742"
        barStyle="light-content"
      />
      <Title>My links</Title>

      {!links.length && <ContainerEmpty>
        <EmptyText>No links were saved yet</EmptyText>
      </ContainerEmpty>}

      {(loading || refreshing) ? <ActivityIndicator color="#fff" size={24} /> :
        <ListLink
          scrollEnabled={false}
          data={links}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <ListItem data={item} handleOnPress={handlePressItem} handleOnRemove={handleConfirmRemoveItem} />}
          showsVerticalScrollIndicator={false}
        />
      }

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
      >
        <ModalLink onClose={() => setModalVisible(false)} data={data} />
      </Modal>
    </Container>
  );
}