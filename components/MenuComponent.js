import React, {Component} from 'react';
import { View, FlatList, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }
    static navigationOptions = {
        title: 'Menu'
    };
    
render() {
    const { navigate } = this.props.navigation;
    const renderMenuItem = ({item, index}) => {

        return (
            <ListItem onPress={() => navigate('Dishdetail', { dishId: item.id })}>
                <Avatar rounded source={'../'+item.source}/>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <View >
                        <Text >{item.description}</Text>
                    </View>
                </ListItem.Content>
            </ListItem> 
        );
    };

    
    return (
            <FlatList 
                data={this.state.dishes}
                renderItem={renderMenuItem}
                onPress={() => navigate('Dishdetail', { dishId: item.id })}
                keyExtractor={item => item.id.toString()}
                />
        );
    }
    
}


export default Menu;