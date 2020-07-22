import React from 'react';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';
import  {Link} from 'react-router-dom'
import '../App.css'

class MenuBook extends React.Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <CurrentlyReading />
                        <WantToRead />
                        <Read />
                    </div>
                </div>
                <div className="open-search">
                <Link to="/search"><button>Add a book</button></Link>
                </div>
            </div>
        );
    }
}
export default MenuBook;