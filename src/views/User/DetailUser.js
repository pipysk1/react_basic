import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios'
class DetailUser extends Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id

            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }

    }
    handleBackButton = () => {
        this.props.history.push('/user');
    }

    render() {
        let { user } = this.state
        let isEmptyObject = Object.keys(user).length === 0

        return (
            <>
                <div>DetailUser with id {this.props.match.params.id}</div>
                {isEmptyObject === false && <>
                    <div>User's name : {user.first_name} {user.last_name}</div>
                    <div>Email: {user.email}</div>
                    <div>
                        <img src={user.avatar} alt="avatar" />
                    </div>
                    <div>
                        <button onClick={() => { this.handleBackButton() }}>Back</button>
                    </div>
                </>
                }
            </>
        )
    }
}
export default withRouter(DetailUser)
