import PropTypes from 'prop-types';
import Button from './Button'


const Header = ({title, onAdd, showAdd}) => {
    return (
        <div>
            <header className = 'header'>
                <h1>{title}</h1>
                <Button color = {showAdd? 'red' : 'green'} 
                text= {showAdd? 'Close' : 'Add'}  
                onClick = {onAdd}/>
            </header>            
        </div>
    )
}

// Header.propTypes = {
//     title : PropTypes.string.isRequired
// }

//CSS in the Javascript
// const headingStyle = {
//     color: 'red',  
//     backgroundColor : 'black'
// }

Header.defaultProps = {
    title: 'Task Tracker',
}
export default Header
