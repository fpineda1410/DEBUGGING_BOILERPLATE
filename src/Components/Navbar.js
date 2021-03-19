import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <div>
      <nav class="navbar navbar-light bg-light  mb-5">
        <div class="container-fluid" style={{ width: "80%" }}>
        <Link to={"/"}>
          <a class="navbar-brand" href="#">
            <img
              src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-1-1.png"
              alt=""
              width="80"
              class="d-inline-block align-top"
            />
          </a>
          </Link>

          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              {store.protagonists.map((item, index) => {
                return (
                  <li key={index}>
                    <button className="dropdown-item" href="#">
                      {item.title}{" "}
                      <button
                        className="btn btn-outline-danger"
                        onClick={(event) => {
                          event.stopPropagation();
                          actions.deleteData(item.id);
                        }}
                      >
                        X
                      </button>{" "}
                    </button>
                  </li>
                );
              })}
              {store.planets.map((item, index) => {
                return (
                  <li key={index}>
                    <button className="dropdown-item" href="#">
                      {item.title}{" "}
                      <button
                        className="btn btn-outline-danger"
                        onClick={(event) => {
                          event.stopPropagation();
                          actions.deleteDataPlanets(item.id);
                        }}
                      >
                        X
                      </button>{" "}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
