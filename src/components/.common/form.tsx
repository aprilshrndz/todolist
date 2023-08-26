interface FormProps {
    children?: React.ReactNode
    className?: string
    id?: string
    onSubmit?: () => void
}

const Form = (props: FormProps) => {
    const { children, className, id, onSubmit } = props

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit && onSubmit()
    }

    return <form
            id={id}
            className={"flex flex-col items-center space-y-6 py-12" + className}
            onSubmit={(e) => onSubmitForm(e)}
        >
            {children}
        </form>

}

export default Form