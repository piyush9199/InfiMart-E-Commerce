import './form-input.styles.scss'

export const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form-input" {...otherProps} />
            {label && (                                        //if label exists render this ()
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>   //if otherProps exist
            )}
        </div>
    )
}