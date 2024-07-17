export function Input({name, label, value, onChange}){
    return (
      <label htmlFor = {label} >{label}*: <input
      type="text"
      value={value}
      id={label}
      name={name}
      onChange={onChange}
      required
    /></label>
    );
  }
  
  export function Text({name, placeholder, value, onChange}){
    return (
      <textarea
      name={name}
      value={value}
      rows="5"
      cols="30"
      placeholder={placeholder}
      onChange={onChange}
      required> 
      </textarea>
    );
  }
  
  export function Duration({ name, startDate, endDate, isPresent, onStartDateChange, onEndDateChange, onPresentChange, setDurationError }) {
    const validateDates = (start, end, present) => {
      if (!start) {
        setDurationError('Start date is required.');
        return false;
      } else if (!present && !end) {
        setDurationError('End date is required if not present.');
        return false;
      } else if (start && end && new Date(start) > new Date(end)) {
        setDurationError('Start date must be before end date.');
        return false;
      } else {
        setDurationError('');
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
          <input name={name} type="date" value={startDate} onChange={(e) => handleStartDateChange(e.target.value)} />
        </label>
        <span> - </span>
        <label>
          End date:
          <input name={name} type="date" value={endDate} onChange={(e) => handleEndDateChange(e.target.value)} disabled={isPresent} />
        </label>
        <label>
          Present:
          <input name={name} type="checkbox" checked={isPresent} onChange={handlePresentChange} />
        </label>
      </div>
    );
  }
  