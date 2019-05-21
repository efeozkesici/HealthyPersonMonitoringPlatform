import { Dimensions, Platform } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dashConditionWrapper: {
    flexDirection: 'row',
  },
  dashFaceContainer: {
    padding: 20,
  },
  feelingFace: {
    width: 120,
    height: 104,
  },
  dataField: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderColor: '#D7D7D7',
  },
  dashTitle: {
    paddingTop: 50,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica-Light' : 'monospace',
    textAlign: 'left',
    fontSize: 18,
    color: 'gray',
  },
  dashCondition: {
    color: '#84D12D',
    fontSize: 20,
  },
  pulseStyle: {
    width: screenWidth,
  },
  dashRiskWrapper: {
    flexDirection: 'row',
  },
  dashOverallRisk: {
    width: 150,
  },
  pressureImageStyle: {
    marginTop: screenHeight * 0.07,
    height: screenHeight * 0.22,
    width: screenWidth * 0.4,
  },
  deltaChanges: {
    width: 150,
    marginLeft: screenWidth * 0.23,
    marginTop: screenHeight * 0.05,
  },
  deltaChange: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  greatBloodPressure: {
    color: '#ff0000',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 10,
    right: screenWidth * 0.1,
  },
  lowBloodPressure: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica-Light' : 'monospace',
    color: '#ff0000',
    fontSize: 25,
    right: screenWidth * 0.1,
  },
  dataTitle: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica-Light' : 'monospace',
    color: 'gray',
    fontSize: 25,
    right: screenWidth * 0.1,
  },
};

export default styles;
