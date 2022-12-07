function Button({ children }) {
  return (
    <button className="bg-cyan-500 hover:bg-cyan-600 m-auto p-1 w-28 text-cyan-50 rounded-lg">
      {children}
    </button>
  );
}

export default Button;
