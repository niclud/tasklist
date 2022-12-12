function Button({ children, funcion, type }) {
  return (
    <button
      type={type}
      className="bg-cyan-500 hover:bg-cyan-600 m-auto p-1 w-28 text-cyan-50 rounded-lg"
      onClick={funcion}
    >
      {children}
    </button>
  );
}

export default Button;
