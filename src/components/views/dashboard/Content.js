import React from "react";
import Modal from "../../../shared/Modal";
import CarForm from "../../../shared/CarForm";
import VehiclesTable from "./VehiclesTable";

const Content = (props) => {
    console.log(props)
    return <div>
        <Modal title="Add new vehicle" { ...props } buttonTitle="Create vehicle" ModalContent={CarForm} />
        <VehiclesTable data={props.state.vehicles} />
    </div>
};

export default Content;
