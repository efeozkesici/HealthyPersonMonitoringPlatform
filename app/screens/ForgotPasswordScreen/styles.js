import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#0F94B4',
        justifyContent: 'center',
    },
    containerView: {
        backgroundColor: '#0F94B4',
        margin: 15,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title:{
        color: '#FFFFFF',
        fontSize: 30,
        fontFamily: 'Poppins',
        width: screenWidth*0.656,
        height: screenHeight*0.052,
        top: screenHeight*0.172,
        marginHorizontal: 150
    },
    textMailInput:{
        borderRadius: 5,
        top: screenHeight*0.293
    }
};

export default styles;