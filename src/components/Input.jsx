function Input({ handler }) {
  const handleChange = (event) => {
    handler(event.target.value);
  };

  return (
    <div>
      <label htmlFor="name" className="sr-only">
        Enter a name
      </label>
      <input
        id="name"
        type="text"
        placeholder="name here"
        className="border-2 border-white my-4 rounded-sm"
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
