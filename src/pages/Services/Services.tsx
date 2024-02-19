const Services = () => {
  return (
    <section className="container-fluid d-flex flex-column p-0 ">
      <div className="bg-warning estiloPersonalizadoServices paddingservice">
        <article className="container-fluid d-flex align-items-center p-0 estiloPersonalizadoServices">
          <div className="container flex-column col-7 ps-5">
            <div className="d-flex align-items-center mb-5">
              <span className="rounded-5 border border-1 border-dark fs-3 medidasServices">
                A
              </span>
              <h1 className="m-0"> Main Service Offering</h1>
            </div>

            <div className="col-1 bg-dark medidaNuevaServices"></div>

            <div className="w-100 mb-3 mt-4 col-11">
              <p className="fs-4 text-start">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat facere, in adipisci iure aut nisi explicabo possimus
                commodi, at cupiditate quam eligendi! Asperiores voluptas, odit
                delectus deserunt debitis sequi quam?
              </p>
            </div>
            <div className="container-fluid d-flex t p-0 mb-5">
              <button className="col-1 p-0 d-flex ">
                {" "}
                <div className="">{">"}</div>
              </button>
            </div>
          </div>
          <div className="col-5 h-100 ubicacionServices">
            <div className="bg-primary col-7 h-50 border border-2 border-dark "></div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
