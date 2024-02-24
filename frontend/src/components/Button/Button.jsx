export const Button = ({ isLoading, label, className, type = "button" }) => {
    return (
        <button className={`btn btn-primary btn-sm ${className}`} type={type}>
            {label}
        </button>
    )
}
