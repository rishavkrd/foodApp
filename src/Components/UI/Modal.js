import classes from './Modal.module.css'
import ReactDOM from 'react-dom';

const portalElement = document.getElementById('overlays');

const Backdrop = props => {
    return <div className={classes.backdrop}></div>
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

export default function Modal(props){
    return <>
    {ReactDOM.createPortal(<Backdrop/>, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, portalElement)}
    </>
}