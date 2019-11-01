import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding'
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      isSelected: false,
      data: this.props.data
    };
  }

  deleteBuilding(id) {
    const tempList = this.state.data
    const index = tempList.findIndex(listing => {return listing.id === id})
    const newList = tempList.slice(0, index).concat(tempList.slice(index+1))
    this.setState({
      data: newList
    })
  }

  addBuilding(code, name, longitude, latitude, address) {
    var listEnd = this.state.data[this.state.data.length - 1].id
    var newList = this.state.data
    
    newList.push({
        id: listEnd + 1,
        code: code,
        name: name,
        coordinates: {
            longitude: longitude,
            latitude: latitude
        },
        address: address
    })
    this.setState({
        data: newList
    })
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id,
      isSelected: true
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>UF Directory App</h1>
        </div>
        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    deleteBuilding={this.deleteBuilding.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                selectedBuilding={this.state.selectedBuilding}
                data={this.state.data}
                isSelected={this.state.isSelected}
              />
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">
                    Add Building
                </h3>
                <div className="card-text"></div>
                  <AddBuilding addBuilding={this.addBuilding.bind(this)} />
                </div>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
