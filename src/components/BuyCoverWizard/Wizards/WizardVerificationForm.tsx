const WizardVerificationForm = () => {
  return (
    <div>
      <h1>Tell us about yourself</h1>

      <form>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="wizard-form-name">Name</label>
          <input type="text" className="form-control" id="wizard-form-name" />
        </div>

        {/* Age */}
        <div className="form-group">
          <label htmlFor="wizard-form-age">Age</label>
          <input type="number" className="form-control" id="wizard-form-age" />
        </div>

        {/* Country */}
        <div className="form-group">
          <label htmlFor="wizard-form-country">Country</label>
          <select className="form-control" id="wizard-form-country">
            <option>Hong kong</option>
            <option>USA</option>
            <option>Australia</option>
          </select>
        </div>

        {/* Packages */}
        <div className="form-group">
          <div className="form-package-option">
            <input
              type="radio"
              id="wizard-form-package-standard"
              name="wizard-form-package-option"
              value="1"
            />
            <label htmlFor="wizard-form-package-standard">Standard</label>
          </div>

          <div className="form-package-option">
            <input
              type="radio"
              id="wizard-form-package-safe"
              name="wizard-form-package-option"
              value="2"
            />
            <label htmlFor="wizard-form-package-safe">Safe</label>
          </div>

          <div className="form-package-option">
            <input
              type="radio"
              id="wizard-form-package-super-safe"
              name="wizard-form-package-option"
              value="3"
            />
            <label htmlFor="wizard-form-package-super-safe">Super Safe</label>
          </div>
        </div>

        <p>Your premium is: 500HKD</p>

        <div className="form-group">
          <button type="submit" className="btn btn-secondary">
            Back
          </button>

          <button type="submit" className="btn btn-primary">
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default WizardVerificationForm
