function Narrower({className, children}){
    return (
        <div className={`max-w-5xl m-auto px-6 ${className}`}>
	        {children}
        </div>
    )
}

export default Narrower;