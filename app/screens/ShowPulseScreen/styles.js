import { Dimensions, Platform } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerView: {
    backgroundColor: '#fff',
    margin: 15,
  },
  heartImageStyle: {
    /* marginBottom: screenHeight * 0.2,
    marginLeft: screenWidth * 0.2, */
    marginTop: screenHeight * 0.05,
    height: screenHeight * 0.22,
    width: screenWidth * 0.4,
  },
  textStyle: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    fontFamily: 'Apple SD Gothic Neo',
    marginTop: screenHeight * 0.005,
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
  activityContainer: {
    maxWidth: 330,
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
  dataField: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderColor: '#D7D7D7',
  },
  pulseStyle: {
    width: screenWidth,
  },
  activityCharts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dashRiskWrapper: {
    flexDirection: 'row',
  },
  dashOverallRisk: {
    width: 150,
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
  dataTitle: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica-Light' : 'monospace',
    color: 'gray',
    fontSize: 25,
  },
  dashRisk: {
    color: '#84D12D',
    fontSize: 50,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  dashStatus: {
    color: '#84D12D',
    fontSize: 40,
    fontWeight: 'bold',
    bottom: screenHeight * 0.055,
    right: screenWidth * 0.1,
  },
  weeklyImage: {
    width: screenWidth * 0.2,
    height: screenHeight * 0.1,
  },
};

export default styles;
