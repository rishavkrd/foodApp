
import classes from './Card.module.css'

export default function Card(props){
    return <div className= {`${props.className} ${classes['card']}`}>
        {props.children}
    </div>
}