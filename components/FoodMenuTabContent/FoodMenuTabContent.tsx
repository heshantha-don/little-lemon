import { ScrollView, View } from 'react-native';
import globalStyle from '../../assets/style/globalStyle';
import FoodMenuTabCell from '../FoodMenuTabCell/FoodMenuTabCell';

const FoodMenuTabContent = () => {
    return (
        <View style={[globalStyle.flex, globalStyle.backgroundColor]}>
            <ScrollView>
                <FoodMenuTabCell />
                <FoodMenuTabCell />
                <FoodMenuTabCell />
                <FoodMenuTabCell />
                <FoodMenuTabCell />
                <FoodMenuTabCell />
            </ScrollView>
        </View>
    );
};

export default FoodMenuTabContent;