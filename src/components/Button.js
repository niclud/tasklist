function Button({ children, funcion, type, className }) {
  return (
    <button
      type={type}
      className={`bg-cyan-500 hover:bg-cyan-600 m-auto p-1 rounded-full md:w-28 text-black md:rounded-lg uppercase ${className}`}
      onClick={funcion}
    >
      {children}
    </button>
  );
}

export default Button;
