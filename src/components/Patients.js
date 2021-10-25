import { render } from '@testing-library/react';
import React from 'react'
// import {useGlobalFilter} from 'react-table'

const Patients= ({ patients }) => {
  function renderPatients()
  {
    

    return patients.map(patient => {
      if(patient.resource.name!=null)
            { 
      return (
        <tr>          
          {patient.resource.name &&
          patient.resource.name[0].family &&
          patient.resource.name[0].given ? (
            <td>
              {patient.resource.name[0].given[0]}
            </td>
          ) : null}
          {patient.resource.name &&
          patient.resource.name[0].family &&
          patient.resource.name[0].given ? (
            <td>
              {patient.resource.name[0].family}
            </td>
          ) : null}
           {patient.resource.birthDate?(<td>{patient.resource.birthDate}</td>):(
            <td>Not Available</td>)}
            {patient.resource.address?(
            <td>
              {patient.resource.address[0].line}<br />{patient.resource.address[0].city}<br />{patient.resource.address[0].state}<br />{patient.resource.address[0].postalCode}
            </td>):(
            <td>Not Available</td>)}
          <td>{patient.resource.Address}</td>
          {patient.resource.gender?(<td>{patient.resource.birthDate}</td>):(
            <td>Not Available</td>)}
          {patient.resource.phone?(<td>{patient.resource.birthDate}</td>):(
            <td>Not Available</td>)}
        </tr>
      );
          }
    });
    
  }

    if (!patients) return <div>Loading...</div>;

    return (
      <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
  <thead>
    <tr>
      <th class="th-sm">First name
      </th>
      <th class="th-sm">Last Name
      </th>
      <th class="th-sm">Birth Date
      </th>
      <th class="th-sm">Address
      </th>
      <th class="th-sm">Gender
      </th>
      <th class="th-sm">Phone Number
      </th>
    </tr>
  </thead>
  <tbody>
    {renderPatients()}
  </tbody>
</table>
    );
  
}

export default Patients
