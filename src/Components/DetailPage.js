import React, { useState, useEffect, useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const gen_content ={
    descrip: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
}

const DetailPage = () => {
    const { store, actions } = useContext(Context);
	const params = useParams();

    if (params.indicator==0){
    return (
         <div className="container-fluid" style={{ width: "80%" }}>
             <div class="row justify-content-start">
                <div class="col mt-4">
                <img
                    src={store.image_storage_protagonists[store.index]}
                    className="card-img-top"
                    alt="..."
                />
                </div>
                <div class="col text-center">
                <h1 class="display-2" style={{ marginLeft: "12%" }}>{store.main_information.name}</h1>
                <h4 class="fs-5">{gen_content.descrip}</h4>
                </div>
            
            </div>
            <hr class="divider text-danger" style={{height:"15px"}}></hr>
            <div class="row align-items-start">
                <div class="col text-center">
                    <b>Name</b><br/>
                    <b>{store.main_information.name}</b>
                </div>
                <div class="col text-center">
                    <b>Gender</b><br/>
                    <b>{store.main_information.gender}</b>
                </div>
                <div class="col text-center">
                    <b>Birth year</b><br/>
                    <b>{store.main_information.birth_year}</b>
                </div>
                <div class="col text-center">
                    <b>Eye Color</b><br/>
                    <b>{store.main_information.eye_color}</b>
                </div>
                <div class="col text-center">
                    <b>Hair Color</b><br/>
                    <b>{store.main_information.hair_color}</b>
                </div>
                <div class="col text-center">
                    <b>Height</b><br/>
                    <b>{store.main_information.height+' cm'}</b>
                </div>
            </div>
        </div>
    )
}
if (params.indicator==1){
    return (
         <div className="container-fluid" style={{ width: "80%" }}>
             <div class="row justify-content-start">
                <div class="col mt-4">
                <img
                    src={store.image_storage_planets[store.index]}
                    className="card-img-top"
                    alt="..."
                />
                </div>
                <div class="col text-center">
                <h1 class="display-2" style={{ marginLeft: "12%" }}>{store.main_information.name}</h1>
                <h4 class="fs-5">{gen_content.descrip}</h4>
                </div>
            
            </div>
            <hr class="divider text-danger" style={{height:"15px"}}></hr>
            <div class="row align-items-start">
                <div class="col text-center">
                    <b>Name</b><br/>
                    <b>{store.main_information.name}</b>
                </div>
                <div class="col text-center">
                    <b>Climate</b><br/>
                    <b>{store.main_information.climate}</b>
                </div>
                <div class="col text-center">
                    <b>Rotation Period</b><br/>
                    <b>{store.main_information.rotation_period+ ' months'}</b>
                </div>
                <div class="col text-center">
                    <b>Surface Water</b><br/>
                    <b>{store.main_information.surface_water +' percentage'}</b>
                </div>
                <div class="col text-center">
                    <b>Gravity</b><br/>
                    <b>{store.main_information.gravity}</b>
                </div>
                <div class="col text-center">
                    <b>Terrain</b><br/>
                    <b>{store.main_information.terrain}</b>
                </div>
            </div>
        </div>
    )
    }
}


export default DetailPage;