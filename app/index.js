import { Navigation } from 'react-native-navigation';
import store from 'store';
import screens from './screens';

screens(store);

export function startIntorductionScreen(){
    Navigation.setRoot({
        root:{
            stack:{
                children:[
                    {
                        component:{
                            name:'LoginScreen'
                        }
                    }
                ],
                options:{
                    topBar:{
                        visible: false,
                        height: 0
                    }
                }
            }
        }
    });
}
