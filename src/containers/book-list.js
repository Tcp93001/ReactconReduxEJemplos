import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title} 
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}</li>
            );
        })
    }

    render() {
        
        return (
            <div className="row">
                <div className="col-md-4 col-offset-md-4">
                    <ul className="list-group col-md-12">
                        {this.renderList()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books 
    };
}


//anything returned from this function will end up as props on the Booklist container
function mapDispatchToProps(dispatch) {

    // whwnwerver selectecBook is called the result shuld be passed to all of our redurcers

    return bindActionCreators({selectBook:selectBook}, dispatch)
}

// Promote Book List from a component to a container --- it needs to know about this new dispatch method, 
//  selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);