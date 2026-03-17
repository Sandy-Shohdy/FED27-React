import { useState, useId } from "react";
import styles from "./MultiStepForm.module.css";
import formConfig from "./formConfig.json";

const { steps: STEPS } = formConfig;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const initialData = {};
    STEPS.forEach((step) => {
      step.fields.forEach((field) => {
        initialData[field.name] = field.type === "checkbox" ? false : "";
      });
    });
    return initialData;
  });
  const [errors, setErrors] = useState({});
  const formId = useId();

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateField = (field, value) => {
    if (field.required) {
      if (field.type === "checkbox" && !value) {
        return `${field.label} is required`;
      }
      if (field.type !== "checkbox" && (!value || value.trim() === "")) {
        return `${field.label} is required`;
      }
    }

    if (field.type === "email" && value && !EMAIL_REGEX.test(value)) {
      return "Please enter a valid email address";
    }

    return null;
  };

  const validateCurrentStep = () => {
    const currentStepConfig = STEPS.find((step) => step.id === currentStep);
    const newErrors = {};

    currentStepConfig.fields.forEach((field) => {
      const error = validateField(field, formData[field.name]);
      if (error) {
        newErrors[field.name] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateCurrentStep()) {
      return;
    }
    if (currentStep < STEPS.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentStep < STEPS.length) {
      nextStep();
    } else {
      handleSubmit(e);
    }
  };

  const progressPercentage = ((currentStep - 1) / (STEPS.length - 1)) * 100;
  const currentStepConfig = STEPS.find((step) => step.id === currentStep);
  const isReviewStep = currentStepConfig.fields.length === 0;

  return (
    <div className={styles.container}>
      <h1 className={styles.title} id={`${formId}-title`}>
        Multi Step Form
      </h1>

      {/* Progress Bar */}
      <div
        className={styles.progressContainer}
        role="progressbar"
        aria-valuenow={currentStep}
        aria-valuemin={1}
        aria-valuemax={STEPS.length}
        aria-label={`Step ${currentStep} of ${STEPS.length}: ${currentStepConfig.title}`}
      >
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className={styles.stepsIndicator} role="list">
          {STEPS.map((step) => (
            <div
              key={step.id}
              role="listitem"
              className={`${styles.stepDot} ${
                currentStep >= step.id ? styles.active : ""
              } ${currentStep === step.id ? styles.current : ""}`}
              aria-current={currentStep === step.id ? "step" : undefined}
            >
              <span className={styles.stepNumber} aria-hidden="true">
                {step.id}
              </span>
              <span className={styles.stepTitle}>{step.title}</span>
            </div>
          ))}
        </div>
      </div>

      <form
        onSubmit={handleFormSubmit}
        aria-labelledby={`${formId}-title`}
        noValidate
      >
        {/* Form Steps */}
        <div className={styles.formContent}>
          {isReviewStep ? (
            <StepReview formData={formData} steps={STEPS} />
          ) : (
            <FormStep
              step={currentStepConfig}
              formData={formData}
              updateFormData={updateFormData}
              errors={errors}
              formId={formId}
            />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className={styles.navigation} role="group" aria-label="Form navigation">
          <button
            type="button"
            className={styles.btnSecondary}
            onClick={prevStep}
            disabled={currentStep === 1}
            aria-disabled={currentStep === 1}
          >
            Previous
          </button>
          {currentStep < STEPS.length ? (
            <button type="submit" className={styles.btnPrimary}>
              Next
            </button>
          ) : (
            <button type="submit" className={styles.btnSuccess}>
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function FormStep({ step, formData, updateFormData, errors, formId }) {
  return (
    <fieldset className={styles.step}>
      <legend className={styles.stepLegend}>{step.title}</legend>
      {step.fields.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={formData[field.name]}
          onChange={(value) => updateFormData(field.name, value)}
          error={errors[field.name]}
          formId={formId}
        />
      ))}
    </fieldset>
  );
}

function FormField({ field, value, onChange, error, formId }) {
  const inputId = `${formId}-${field.name}`;
  const errorId = `${formId}-${field.name}-error`;

  if (field.type === "checkbox") {
    return (
      <div className={styles.checkboxGroup}>
        <label
          className={`${styles.checkboxLabel} ${error ? styles.checkboxError : ""}`}
          htmlFor={inputId}
        >
          <input
            type="checkbox"
            id={inputId}
            name={field.name}
            checked={value}
            onChange={(e) => onChange(e.target.checked)}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={error ? errorId : undefined}
          />
          <span>
            {field.label}
            {field.required && (
              <span className={styles.required} aria-hidden="true"> *</span>
            )}
          </span>
        </label>
        {error && (
          <span id={errorId} className={styles.errorMessage} role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={styles.formGroup}>
      <label htmlFor={inputId}>
        {field.label}
        {field.required && (
          <span className={styles.required} aria-hidden="true"> *</span>
        )}
      </label>
      <input
        type={field.type}
        id={inputId}
        name={field.name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        autoComplete={field.autocomplete}
        aria-required={field.required}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        className={error ? styles.inputError : ""}
      />
      {error && (
        <span id={errorId} className={styles.errorMessage} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

function StepReview({ formData, steps }) {
  const stepsWithFields = steps.filter((step) => step.fields.length > 0);

  return (
    <div className={styles.step}>
      <h2>Review Your Information</h2>
      {stepsWithFields.map((step) => (
        <section key={step.id} className={styles.reviewSection} aria-labelledby={`review-${step.id}`}>
          <h3 id={`review-${step.id}`}>{step.title}</h3>
          <dl className={styles.reviewList}>
            {step.fields.map((field) => (
              <div key={field.name} className={styles.reviewItem}>
                <dt>{field.label}</dt>
                <dd>
                  {field.type === "checkbox"
                    ? formData[field.name]
                      ? "Yes"
                      : "No"
                    : formData[field.name] || "Not provided"}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
