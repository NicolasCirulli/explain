import "./ejercicio1.css";
export const Ejercicio1 = () => {
  const agregarNota = (value) => {
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target[0];
    agregarNota(input.value);
    input.value = "";
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          tarea
          <input type="text" />
        </label>
        <input type="submit" value="subir" />
      </form>

      <section>
        <h2>Tareas pendientes</h2>

        <ul>
          <li>tarea 1</li>
          <li>tarea 2</li>
          <li>tarea 3</li>
        </ul>
      </section>
    </>
  );
};
