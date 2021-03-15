import React from 'react'

class Result extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render () {

        return (
        
            <div className='div-row'>
                <div className='div-col-result'>{this.props.surname}</div>
                <div className='div-col-result'>{this.props.name}</div>
                <div className='div-col-result'>{this.props.sname}</div>
                <div className='div-col-result'>{this.props.bdate}</div>
                <div className='div-col-result'>{this.props.identif}</div>
                <div className='div-col-result'>{this.props.addressLast}</div>
                <div className='div-col-result'>{this.props.ateAddress}</div>
                <div className='div-col-result'>{this.props.dsdDateRec}</div>                        
            </div>
        )
    }
}

export default Result;