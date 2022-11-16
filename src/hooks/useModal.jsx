import { useState } from 'react';

export default function useModal() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return [modalVisible, openModal, closeModal];
}
