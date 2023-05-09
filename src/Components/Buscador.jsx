function Buscador({ buscar, handleChange }) {
  return (
    <input type="text" name="buscar" value={buscar} onChange={handleChange} />
  );
}

export default Buscador;
