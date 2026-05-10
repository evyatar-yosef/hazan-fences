export default function FormField({ label, placeholder, full, type = "text", value, onChange, name }) {
  return (
    <div className="form-field" style={{ gridColumn: full ? "1 / -1" : "auto" }}>
      <label>
        {label}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
