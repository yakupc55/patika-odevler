import PropTypes from 'prop-types'

function User({name ,surname,isLoggedIn,friends,age}) {
    
    return(
    <>
    <h1> {isLoggedIn? `${name} ${surname}` : `Giriş yapmadınız.` } </h1>
    {friends.map((friend,index)=> <div key={index}>{index} - {friend}</div>)}
    </>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname : PropTypes.string.isRequired,
    isLoggedIn : PropTypes.bool.isRequired,
    friends : PropTypes.array.isRequired,
    age : PropTypes.oneOfType([PropTypes.string,PropTypes.number])
}

User.defaultProps = {
    isLoggedIn: false
}
export default User