import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import BookTopic from '../containers/book-topic';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <BookList />
        <BookDetail />
        <BookTopic />
      </div>
    );
  }
}
