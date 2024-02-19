import "bootstrap-icons/font/bootstrap-icons.css";
import "../../style.css";
const Navbar = () => {
  return (
    <nav className=" bg-secondary d-flex estiloPersonalizado ">
      <div className="d-flex align-items-center ">
        <div>
          <i className="bi bi-star-fill fs-4"></i>
        </div>
        <div>
          <h1 className="fs-4 mb-0">Ipsum Lorem</h1>
        </div>
      </div>

      <div className="displayOf">
        <i className="bi bi-list fs-1"></i>
      </div>

      <ul className="container list-unstyled display justify-content-evenly  col-8 h-100  align-items-center m-0 p-0 pe-3">
        <li className="align-self-center">
          <a href="#" className="text-decoration-none text-dark">
            Lorem
          </a>
        </li>
        <li className="align-self-center">
          <a href="#" className="text-decoration-none text-dark">
            Lorem
          </a>
        </li>
        <li className="align-self-center">
          <a href="#" className="text-decoration-none text-dark">
            Lorem
          </a>
        </li>
        <li className="align-self-center">
          <a href="#" className="text-decoration-none text-dark">
            Lorem
          </a>
        </li>
        <li className="align-self-center">
          <a href="#" className="text-decoration-none text-dark">
            Lorem
          </a>
        </li>
        <li className="align-self-center">
          <a href="#" className="text-decoration-none text-dark">
            Lorem
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
