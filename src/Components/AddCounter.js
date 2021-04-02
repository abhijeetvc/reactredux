import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addCounter} from '../action'

function AddCounter(props){
    return(
        <div>
            <button onClick={(event)=>{
                event.preventDefault()
                props.dispatch(addCounter())
            }}>Add Counter</button>
        </div>
    )
}

//this is needed bcoz we need to pass dispatch as a property to the component
// and bind the action with the component
function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(addCounter,dispatch)
    }
}

export default connect(mapDispatchToProps)(AddCounter)