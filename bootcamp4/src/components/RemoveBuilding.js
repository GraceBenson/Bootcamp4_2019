import React from 'react'

class RemoveBuilding extends React.Component {
    render () {
        const {deleteBuilding, id} = this.props
        return (
            <div>
                <button className="btn btn-sm btn-danger"
                    onClick={() => deleteBuilding(id)}
                >
                    Remove</button>
            </div>
        )
    }
}

export default RemoveBuilding
    