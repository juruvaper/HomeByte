const CheckboxList = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" name="price500k" checked={filters.price500k} onChange={handleChange} />
        <span>500 000 PLN</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" name="surface70" checked={filters.surface70} onChange={handleChange} />
        <span>70 m2</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" name="year" checked={filters.oze} onChange={handleChange} />
        <span>2021+</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" name="basement" checked={filters.basement} onChange={handleChange} />
        <span>Basement</span>
      </label>
    </div>
  );
};

export default CheckboxList;