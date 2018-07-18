import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookTopic extends Component {
    
    render(){
        if (!this.props.book) {
            return <div> Select a book to get started.</div>
        }
        
        return(
            <div className="col-md-4 col-md-offset-4">
                <h5>Género: </h5>
                <div>{this.props.book.topic}</div>
            </div>
        );
    }       

}

function mapStateToProps(state) {
    return {
        book:state.activeBook
    };
}

export default connect(mapStateToProps)(BookTopic);