import React, {Component} from "react"
import {connect} from "react-redux";
import Color from "../Color/Color"
import logo from '../../assets/image/img_VN.jpg'


class Home extends Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    handleDeleteUser = (user) => {
        this.props.deteleUserRedux(user)

    }
    handleCreateUser = () => {
        this.props.addUserRedux();
    }

    render() {
        console.log(">>>check props ", this.props.dataRedux)
        let listUser = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello World From HomePage
                </div>
                <div>
                    <img src={logo} style={{width: '200px', height: '200px', borderRadius: '50%', marginTop: '20px'}}/>
                </div>
                <div>
                    {
                        listUser && listUser.length > 0 &&
                        listUser.map((item, index) => (
                            <div key={index}>
                                {index + 1} - {item.name}
                                &nbsp;     <span onClick={() => this.handleDeleteUser(item)}> &times;</span>

                            </div>
                        ))
                    }
                    <button onClick={() => this.handleCreateUser()}>Add User New</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deteleUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'CREATE_USER'}),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
