import React from "react";
import { 
  View,
  Modal,
  ModalProps,
  Text,
} from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hook/auth";
import Background from "../Background";
import { styles } from './styles';

type Props = ModalProps & {
  closeModal: () => void;
}

const ModalList = ({closeModal, ...rest}: Props) => {
  const { signOut } = useAuth();

  return (
    <Modal transparent statusBarTranslucent animationType="slide" {...rest}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            <View style={styles.headerQuestion}>
              <Text style={[styles.title, styles.titleQuestion]}>
                Deseja sair do Game
                <Text style={[styles.title, styles.play]}>Play</Text> ?
              </Text>
            </View>
            <View style={styles.buttons}>
              <RectButton onPress={closeModal} style={[styles.button, styles.buttonCancel]}>
                <Text style={[styles.text, styles.textCancel]}>Cancelar</Text>
              </RectButton>
              <RectButton onPress={signOut} style={[styles.button, styles.buttonSair]}>
                <Text style={[styles.textSair, styles.text]}>Sair</Text>
              </RectButton>
            </View>
          </Background>
        </View>
      </View>
    </Modal>
  );
};

export default ModalList;
