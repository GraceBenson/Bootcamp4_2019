import React from 'react';
import RemoveBuilding from './RemoveBuilding'

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate, deleteBuilding } = this.props;
		const buildingList = data
		.filter(building => {
			return building.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
		})
		.map(directory => {
			return (
				<tr key={directory.id}
					onClick={() => selectedUpdate(directory.id)}		
				>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
					<td><RemoveBuilding 
						id = {directory.id}
						deleteBuilding = {deleteBuilding.bind(this)}
					/></td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
