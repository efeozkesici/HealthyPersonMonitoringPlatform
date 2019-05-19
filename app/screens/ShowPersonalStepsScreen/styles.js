import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = {
    container: {
        backgroundColor: '#2c3e50',
        paddingTop: 15
    },
      logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 1,
        marginBottom: 10
      },
      clock: {
        height: 40,
        width: 40
      },
      title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10
      },
      firstLastContainer: {
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      totalsContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      totals: {
        color: '#f39c12',
        fontSize: 20
      },
      user: {
        color: '#f39c12',
        fontSize: 35
      },
      age: {
        color: 'white',
        fontSize: 20
      },
      small: {
        color: 'white',
        fontSize: 20
      },
      smaller: {
        color: 'white',
        fontSize: 13
      },
      infoCards: {
        margin: 10,
        padding: .5
      },
      imageContainer: {
        alignItems: 'center'
      },
      images: {
        height: 55,
        width: 55
      },
      stepTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 5,
        borderLeftWidth: .5,
        borderRightWidth: .5,
        borderBottomWidth: .5,
        borderColor: '#f39c12',
        backgroundColor: 'rgba(243, 156, 18, 0.1)',
        borderRadius: 5
      },
      distanceWalkRunContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 5,
        borderLeftWidth: .5,
        borderRightWidth: .5,
        borderBottomWidth: .5,
        borderColor: '#f39c12',
        backgroundColor: 'rgba(243, 156, 18, 0.1)',
        borderRadius: 5
      },
      flightsClimbedContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 5,
        borderLeftWidth: .5,
        borderRightWidth: .5,
        borderBottomWidth: .5,
        borderColor: '#f39c12',
        backgroundColor: 'rgba(243, 156, 18, 0.1)',
        borderRadius: 5
      },
      buttonContainer: {
        backgroundColor: '#2c3e50',
        paddingVertical: 15
      },
      buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
      }
};

export default styles;