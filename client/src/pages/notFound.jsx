import React from 'react'
import { Link }from 'react-router-dom'

export default class NotFound extends React.Component{
    render(){
        return(
            <div>
                <p>404 Error: Not Found Page</p>
                <Link to='/'>Home</Link>
            </div>
        )
    }
}