import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";

export class Contact extends Component {
	render() {
		return (
			<Card>
				<Card.Title>Contact Information</Card.Title>
				<Text style={{ margin: 10 }}>121, Clear Water Bay Road</Text>
				<Text style={{ margin: 10 }}>Clear Water Bay, Kowloon</Text>
				<Text style={{ margin: 10 }}>HONG KONG</Text>
				<Text style={{ margin: 10 }}>Tel: +852 1234 5678</Text>
				<Text style={{ margin: 10 }}>Fax: +852 8765 4321</Text>
				<Text style={{ margin: 10 }}>Email:confusion@food.net</Text>
			</Card>
		);
	}
}

export default Contact;

// Our Address

// 121, Clear Water Bay Road
// Clear Water Bay, Kowloon
// HONG KONG
// Tel: +852 1234 5678
// Fax: +852 8765 4321
// Email:confusion@food.net
