import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getPatients } from '../services';
import Button from './Button';
class Table extends React.Component {
    state = {      
      firstName: '',
      lastName: '',
      isSearch: false,
      nameError: '',
      dateError: '',
      searchError: '',
      searchDate: '',
      patients: [],
    };
}