import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

let temporal_list = [];
let temporal_list_planets = [];


function Components() {
  const { store, actions } = useContext(Context);
  
  const buttonLabel = {
    learn: "Learn More",
    favorites: "❤",
  };
  



  const CardGenerator = ({ list }) => {
      console.log(store.boolean_protagonist)
    return list.map((item, index) => (
    
      <div className="col-3 m-3">
        <div className="card">
          <img
            src={store.image_storage_protagonists[index]}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              <b>Gender:</b>{" "}
              {store.boolean_planets ? store.protagonist_props[index].gender:''}
              {" "}
            </p>
            <p className="card-text">
              <b>Birthyear:</b>{" "}
              {store.boolean_planets ?store.protagonist_props[index].birth_year:''}
                {" "}
            </p>
            <p className="card-text">
              <b>Eye Color:</b>{" "}
              {store.boolean_planets ?store.protagonist_props[index].eye_color:''}
              {" "}
            </p>
            <p className="card-text">
              <b>Hair Color:</b>{" "}
              {store.boolean_planets ?store.protagonist_props[index].hair_color:''}
              {" "}
            </p>
            <p className="card-text">
              <b>Height:</b>{" "}
              {store.boolean_planets ?store.protagonist_props[index].height:''}{" "}
            </p>
            <p className="card-text">
              <b>Home world:</b>{" "}
              {store.boolean_planets
                ? store.planet_props.map((item) =>
                    item.url ==
                    store.protagonist_props[index].homeworld
                      ? item.name
                      : ""
                  )
              : "not found"}{" "}
            </p>
            <p className="card-text">
              <b>Url:</b>
              <a
                href={
                    store.boolean_planets
                    ? store.protagonist_props[index].url
                    : "not found"
                }
              >
                {store.boolean_planets
                    ? store.protagonist_props[index].url
                    : "not found"
                }
              </a>{" "}
            </p>

            <div className="d-flex justify-content-between">
            <Link to={"/detail/"+0}>
              <button
                className="btn btn-primary"
                onClick={() =>
                  actions.publishData(store.protagonist_props[index],index)
                }
              >
                {buttonLabel.learn}
              </button>
              </Link>
              <button
                className="btn btn-warning text-right"
                onClick={() =>
                  actions.pushData({ title: item.name, id: index })
                }
              >
                {buttonLabel.favorites}
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const CardGeneratorPlanets = ({ list }) => {
    
    return list.map((item, index) => (
      <div className="col-3 m-3">
        <div className="card">
          <img
            src={store.image_storage_planets[index]}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              <b>Climate:</b>{" "}
              {store.boolean_planets ?store.planet_props[index].climate:''}
              {" "}
            </p>
            <p className="card-text">
              <b>Diameter:</b>{" "}
              {store.boolean_planets ?store.planet_props[index].diameter+' km':''}
            </p>
              <b>Gravity:</b>{" "}
              {store.boolean_planets ? store.planet_props[index].gravity:''}
              {" "}
             {" "}
            <p className="card-text">
            </p>
            <p className="card-text">
              <b>Population:</b>{" "}
              {store.boolean_planets ? store.planet_props[index].population+' people':''}
              {" "}
            </p>
            <p className="card-text">
              <b>Terrain:</b>{" "}
              {store.boolean_planets ? store.planet_props[index].terrain:''}
              {" "}
            </p>
            <p className="card-text">
              <b>Url:</b>
              <a
                href={store.boolean_planets ? store.planet_props[index].url:''}
              >
                {" "}{store.boolean_planets ? store.planet_props[index].url:'Not found!'}
              </a>{" "}
            </p>
            <div className="d-flex justify-content-between">
            <Link to={"/detail/"+1}>
                <button
                    
                    className="btn btn-primary"
                    onClick={() =>
                    actions.publishData(store.planet_props[index],index)
                    }
                >
                    {buttonLabel.learn}
                </button>
            </Link>
              <button
                className=""
                className="btn btn-warning text-right"
                onClick={() =>
                  actions.pushDataPlanets({ title: item.name, id: index })
                }
              >
                {buttonLabel.favorites}
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
    <h1 class="display-2 text-danger" style={{ marginLeft: "12%" }}>Characters</h1>
      <div className="container-fluid" style={{ width: "80%" }}>
        <div className="row flex-row flex-nowrap overflow-auto">
          <div className="d-flex flex-row flex-nowrap">
            <CardGenerator list={store.protagonist_props} />
          </div>
        </div>
      </div>

      <h1 class="display-2 text-danger" style={{ marginLeft: "12%", marginTop: "2%" }}>Planets</h1>
      <div className="container-fluid" style={{ width: "80%" }}>
        <div className="row flex-row flex-nowrap overflow-auto">
          <div className="d-flex flex-row flex-nowrap">
            <CardGeneratorPlanets
              list={store.planet_list}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Components;
