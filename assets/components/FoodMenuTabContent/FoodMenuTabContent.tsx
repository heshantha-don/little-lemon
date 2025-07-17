import { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import globalStyle from '../../style/globalStyle';
import FoodMenuTabCell from '../FoodMenuTabCell/FoodMenuTabCell';
import { useAppDispatch, useAppSelector } from '../../customHooks/useStore';
import { fetchAndCacheMenu, loadMenuFromDb } from '../../database/store/menuSlice';
import ActivityIndicatorView from '../ActivityIndicatorView/ActivityIndicatorView';

const FoodMenuTabContent = () => {

    const dispatch = useAppDispatch();
    const { items, loading, error } = useAppSelector((state) => state.menu);

    useEffect(() => {
        dispatch(loadMenuFromDb()).then((res) => {
            if(!res.payload) {
                dispatch(fetchAndCacheMenu());
            }
        });
    }, [dispatch]);

    if (loading) return <ActivityIndicatorView />;
    if (error) return (<View style={[globalStyle.flex, globalStyle.backgroundColor]}><Text>{error}</Text></View>);

    return (
        <View style={[globalStyle.flex, globalStyle.backgroundColor]}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <FoodMenuTabCell 
                        id = {item.id} 
                        name = {item.name} 
                        price = {item.price} 
                        description = {item.description} 
                        imageUrl = {item.imageUrl} 
                        category = {item.category} />
                )}
            />
        </View>
    );
};

export default FoodMenuTabContent;