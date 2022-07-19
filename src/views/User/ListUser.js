import React, { Component } from 'react'
import axios from 'axios'
import './ListUser.scss'
import { withRouter } from 'react-router-dom';
class ListUser extends Component {
    state = {
        listUser: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users');
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })

    }
    handleViewDetail = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }
    render() {
        let { listUser } = this.state
        return (
            <div className='list-user-container'>
                <div className='title'>
                    Fetch all list user
                </div>
                <div className='list-user-content'>

                    {
                        listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div key={index} className='child'
                                    onClick={() => { this.handleViewDetail(item) }}
                                >
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>)
                        })
                    }



                </div>
            </div>
        )
    }
}
export default withRouter(ListUser)