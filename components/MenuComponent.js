import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes
    }
}

class Menu extends Component {
	static navigationOptions = {
		title: "Menu",
	};

	render() {
		const { navigate } = this.props.navigation;
		const renderMenuItem = ({ item, index }) => {
			return (
				<ListItem onPress={() => navigate("Dishdetail", { dishId: item.id })}>
					<Avatar rounded source={{uri: baseUrl + item.image}} />
					<ListItem.Content>
						<ListItem.Title>{item.name}</ListItem.Title>
						<View>
							<Text>{item.description}</Text>
						</View>
					</ListItem.Content>
				</ListItem>
			);
		};

		return (
			<FlatList
				data={this.props.dishes.dishes}
				renderItem={renderMenuItem}
				onPress={() => navigate("Dishdetail", { dishId: item.id })}
				keyExtractor={item => item.id.toString()}
			/>
		);
	}
}

export default connect(mapStateToProps)(Menu);
