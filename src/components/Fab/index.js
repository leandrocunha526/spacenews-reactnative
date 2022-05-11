import React, {useState} from 'react';
import { StyleSheet } from "react-native";
import { FAB, Portal, Provider } from 'react-native-paper';

const Fab = () => {
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
    <Portal>
   <FAB.Group
      open={open}
      style={styles.fab}
      icon={'magnify'}
      actions={[
        {
          icon: 'calendar-search',
          label: 'Search by date',
          onPress: () => console.log('Pressed email'),
        },
        {
          icon: 'text-box-search-outline',
          label: 'Search by text',
          onPress: () => console.log('Pressed email'),
        },
      ]}
      onStateChange={onStateChange}
    />
    </Portal>
    </Provider>
  );
}

export default Fab;

const styles = StyleSheet.create({
    fab: {
      position: "absolute",
      margin: 16,
      left: 0,
      top: 0,
    },
});
