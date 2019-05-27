import React from "react";
import { Table, Divider, Tag } from 'antd';
import Confirm from "../../../shared/Confirm";
import { deleteDoc, updateDoc } from "../../../firebase/firestore";
import Modal from "../../../shared/Modal";
import DetailedView from "./DetailedView";

const columns = [
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Release Year',
    dataIndex: 'release_year',
    key: 'release_year',
  },
  {
    title: 'Source Country',
    dataIndex: 'source_country',
    key: 'source_country',
  },
  {
    title: 'Vehicle Conditions',
    key: 'conditions',
    dataIndex: 'conditions',
    render: value => (
      <span>        
        <Tag color={value === 'Used' ? 'red' : (value === 'Other' ? 'black' : 'green')}>
          {value}
        </Tag>
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <Confirm color="yellow" onConfirm={() => updateDoc({...record, disabled: !record.disabled})} text={record.disabled ? 'Enable' : 'Disable'} question={`Are you sure?`} />
        <Divider type="vertical" />
        <Modal buttonTitle="Details" isView vehicle={record} title={`Details for ${record.brand}`} ModalContent={DetailedView} isLink />
        <Divider type="vertical" />
        <Confirm onConfirm={() => deleteDoc(record.key)} text="Delete" question={`Are you sure to delete an ${record.brand} vehicle?`} />
      </span>
    ),
  },
];

const VehiclesTable = (props) => (
  <div>
    <Table size="middle" pagination={{ pageSize: 8 }} columns={columns} dataSource={props.data} />
  </div>
);

export default VehiclesTable;