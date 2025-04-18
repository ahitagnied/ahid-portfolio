import React from 'react';
import { Bookshelf } from '../components/BookShelf';
import books from '../contents/Books';

function Reading() {
  return (
    <div>
        <Bookshelf books={books} />
    </div>
  );
}

export default Reading;