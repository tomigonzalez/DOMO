import "../../style.css";

const Home = () => {
  return (
    <article className="bg-primary d-flex align-items-center estiloPersonalizadoHome">
      <div className="p-5 flex-column">
        <div className="d-flex align-items-center mb-5">
          <span className="rounded-5 border border-1 border-dark fs-3 medidas">
            A
          </span>
          <h1 className="m-0">MainHeroContent</h1>
        </div>
        <div className="col-1 bg-dark medidaNueva"></div>

        <div className=" col-lg-9 col-md-11 mb-3">
          <p className="fs-4 text-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            facere, in adipisci iure aut nisi explicabo possimus commodi, at
            cupiditate quam eligendi! Asperiores voluptas, odit delectus
            deserunt debitis sequi quam?
          </p>
        </div>
        <div className="container-fluid d-flex t p-0 mb-5">
          <button className="col-1 p-0 d-flex ">
            {" "}
            <div className="">{">"}</div>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Home;
