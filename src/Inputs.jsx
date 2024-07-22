export function Input({ name, label, value, onChange }) {
  return (
    <input
      className="textInput"
      type="text"
      value={value}
      id={label}
      name={name}
      placeholder={label}
      onChange={onChange}
      required
    />
  );
}

export function Text({ name, placeholder, value, onChange }) {
  return (
    <textarea
      className="textBox"
      name={name}
      value={value}
      rows="5"
      cols="30"
      placeholder={placeholder}
      onChange={onChange}
      required
    ></textarea>
  );
}

export function Duration({
  name,
  startDate,
  endDate,
  isPresent,
  onStartDateChange,
  onEndDateChange,
  onPresentChange,
  setDurationError,
}) {
  const validateDates = (start, end, present) => {
    if (!start) {
      setDurationError("Start date is required.");
      return false;
    } else if (!present && !end) {
      setDurationError("End date is required if not present.");
      return false;
    } else if (start && end && new Date(start) > new Date(end)) {
      setDurationError("Start date must be before end date.");
      return false;
    } else {
      setDurationError("");
      return true;
    }
  };

  const handleStartDateChange = (value) => {
    onStartDateChange(value);
    validateDates(value, endDate, isPresent);
  };

  const handleEndDateChange = (value) => {
    onEndDateChange(value);
    validateDates(startDate, value, isPresent);
  };

  const handlePresentChange = () => {
    onPresentChange();
    validateDates(startDate, endDate, !isPresent);
  };

  return (
    <div className="duration">
      <label>
        Start date:
        <input
          name={name}
          type="date"
          value={startDate}
          onChange={(e) => handleStartDateChange(e.target.value)}
        />
      </label>
      <label>
        End date:
        <input
          name={name}
          type="date"
          value={endDate}
          onChange={(e) => handleEndDateChange(e.target.value)}
          disabled={isPresent}
        />
      </label>
      <label>
        Present:
        <input
          name={name}
          type="checkbox"
          checked={isPresent}
          onChange={handlePresentChange}
        />
      </label>
    </div>
  );
}

export function Image({ onFileSelect, imageUrl }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onFileSelect(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label htmlFor="imagePicker">Upload a pciture: </label>
      <input
        id="imagePicker"
        type="file"
        accept="image/*"
        defaultValue={imageUrl ? imageUrl : null}
        onChange={handleFileChange}
      />
    </div>
  );
}
