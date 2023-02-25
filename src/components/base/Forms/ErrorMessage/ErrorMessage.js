export const ErrorMessage = (props) => {
    const {field, errors} = props;
    if (errors[field]) {
        return (
            <div className="invalid-feedback">
                {errors[field]}
            </div>
        );
    }
    return null;
};
