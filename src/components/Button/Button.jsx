import style from "./Button.module.scss"

const Button = ({type, children, ...otherProps}) => {
    switch(type){
        default: return  (<button className={style.mainBtn}  {...otherProps}>{children}</button> )
    }

}
export default Button