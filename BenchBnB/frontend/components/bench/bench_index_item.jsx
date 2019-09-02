import React from 'react';
const BenchIndexItem = ({bench}) => (
    <li>
        <h2>{bench.description}</h2>
        <h3>Latitute: {bench.lat}</h3>
        <h3>Longitude: {bench.lng}</h3>
    </li>
)
export default BenchIndexItem;