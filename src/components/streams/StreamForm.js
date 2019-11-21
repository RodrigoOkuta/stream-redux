import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends Component {
    renderInput({ input, label, meta }) {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {meta.touched && meta.error && <div className="ui error message"><div className="header">{meta.error}</div></div>}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" label="Enter Title" component={this.renderInput} />
                <Field name="description" label="Enter Description" component={this.renderInput} />
                <button className="ui button primary" >Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {}
    if (!formValues.title)
        errors.title = 'You must enter a title'

    if (!formValues.description)
        errors.description = 'You must enter a description'

    return errors
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm)