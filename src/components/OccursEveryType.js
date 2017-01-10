import React from 'react';
import { FormControl } from 'react-bootstrap';
import { occurrenceTypes } from '../consts';

export const OccursEveryType = ({schedule, onChange}) => {    
    return (
        <FormControl 
            componentClass="select"
            value={schedule.occursEveryType}
            onChange={(e) => onChange(e.target.value)}>
                {Object.values(occurrenceTypes).map((occurenceType) =>
                    <option value={occurenceType.key} key={occurenceType.key}>{occurenceType.display}</option>
                )}
        </FormControl>
    )
}