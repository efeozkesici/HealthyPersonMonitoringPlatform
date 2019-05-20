import { Platform } from 'react-native';

const styles = {
  headerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#F7F7F7',
    borderBottomWidth: 0.5,
    borderColor: '#d6d7da',
  },

  headerTitle: {
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'TrebuchetMS' : 'monospace',
    fontSize: 25,
    paddingTop: 25,
    color: 'tomato',
  },
};
export default styles;
