
interface InputFieldProps {
    className?: string
    label?: string
    message?: string
    messageType?: "error" | "info" // default is info
    name: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeHolder?: string
    required?: boolean
    tabIndex?: number
    toggleBtn?: JSX.Element | string // SVG icon or string
    toggleOnClick?: () => void
    type: string
    value: string
}

const InputField = (props: InputFieldProps) => {
    const { className, label, message, messageType = "info", name, onChange, placeHolder, required, tabIndex, toggleBtn, toggleOnClick, type = 'text', value } = props

    return <>
        {label ? <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">{label}</label> : null}
        <div className="text-center relative inline-block">
            {toggleBtn ? <a href="#" onClick={() => toggleOnClick && toggleOnClick()}>{toggleBtn}</a> : null}
            <input id={name} name={name} type={type} value={value} placeholder={placeHolder} required={required} aria-label={placeHolder} tabIndex={tabIndex} onChange={(e) => onChange && onChange(e)} className={className ? className : '' + " w-52 rounded-full text-gray-700 px-4 py-2 bg-white sm:bg-c-lavender-1 shadow-inner"} />
            {message ? <div className={'h-6 ' + (messageType === 'error' ? 'text-red-600' : 'text-gray-900')}>{message}</div> : null}
        </div>
    </>

}

export default InputField;