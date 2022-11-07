import Narrower from "./Narrower";
import Button from "./Button";

function Header(){
    return (
        <header className="py-3 soft-shadow w-screen top-0 left-0 z-20 bg-white/90 backdrop-blur fixed">
            <Narrower className= "grid grid-flow-col items-center">
                <a href="/" className="w-52">
                    <strong className="bold text-4xl">TaskList</strong>
                    <small className="bold">By Nico!</small>
                </a>
                <div className="grid grid-flow-col justify-end gap-4">
                    <Button>Sign Up</Button>
                    <Button>Register</Button>
                </div>
            </Narrower>
        </header>
    )
}

export default Header;