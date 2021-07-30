import React from 'react'

const style = {
    display:'flex',
    padding: '1rem',
    flexDirection:'column',
    alignItems:'center',
    width: 'calc(100% - 2rem)',
    height: 'calc(100vh - 7rem)'
}

export default class Content extends React.Component{
    render() {
        return (
            <div style={style}>
                <div style={{display:'flex', flexDirection:'column'}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}