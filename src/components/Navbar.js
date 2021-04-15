import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="my-5">
        <Link className="text-decoration-none btn btn-primary" to="/">Home</Link>
        <Link className="text-decoration-none mx-5 btn btn-primary" to="/contact">Contact</Link>
        <Link className="text-decoration-none btn btn-primary" to="/about">About</Link>
      </nav>
    </div>
  );
}
