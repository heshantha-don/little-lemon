import { View, Image } from 'react-native';
import { TitleType } from '../../assets/utils/EnumTypes';

import LabelView from '../LabelView/LabelView';

import { style } from './style';

const FoodMenuTabCell = () => {
    return (
        <View style={style.container}>
            <View style={style.labelContainer}>
                <LabelView 
                    extraStyle={style.label}
                    label='Greek Salad' 
                    titleType={TitleType.H5} />
                <LabelView  
                    extraStyle={style.label}
                    label='The famous greek salad of crispy lettuce, peppers, olives and our Chicag...' 
                    titleType={TitleType.H6} 
                    fontWeight={'200'} />
                <LabelView
                    label='$12.99' 
                    titleType={TitleType.H5} 
                    color={'#5A6D67'}
                    fontWeight={'500'} />
            </View>
            <Image 
                style={style.photo} 
                source={require('../../assets/images/GreekSalad.png')} />
        </View>
    );
};

export default FoodMenuTabCell;