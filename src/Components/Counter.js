import {connect} from 'react-redux'

function Counter(props){
    return(
        <div>
            {props.count}
        </div>
    )
}

function mapStateToProps(state){
    return{
        count:state.counterReducer
    }
}

export default connect(mapStateToProps)(Counter)