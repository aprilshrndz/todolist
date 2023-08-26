 enum ButtonTypes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
 }
 
 interface ButtonProps {
    className?: string 
    disabled?: boolean
    formType?: "submit" | "button" | "reset"
    label: string | JSX.Element
    onClick?: () => void
    tabIndex?: number
    type?: "primary" | "secondary" //default is primary
 }
 
 const Button = (props: ButtonProps) => {
    const { className, disabled, formType, label, onClick, tabIndex, type = "primary" } = props
    const style = className ? className : '' + (type === ButtonTypes.PRIMARY ? ' primary-btn-mob sm:primary-btn' : '')

    return <button disabled={disabled } type={formType} onClick={() => onClick && onClick()} tabIndex={tabIndex} aria-label={typeof label === 'string' ? label : '' } className={style + ' w-52 py-2 rounded-full shadow-inner'}>{label}</button>

 }

export default Button