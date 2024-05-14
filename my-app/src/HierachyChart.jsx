// src/HierarchyChart.js
import React from 'react';
import { Tree } from 'react-d3-tree';

const data = {
  name: 'Root',
  children: [
    {
      name: 'Child 1',
      children: [
        { name: 'Grandchild 1' },
        { name: 'Grandchild 2' },
      ],
    },
    {
      name: 'Child 2',
      children: [
        { name: 'Grandchild 3' },
        { name: 'Grandchild 4' },
      ],
    },
  ],
};

const containerStyles = {
  width: '1000px',
  height: '1000px',
};

const HierarchyChart = () => {
  return (
    <div style={containerStyles}>
      <Tree data={data} orientation="vertical" />
    </div>
  );
};

export default HierarchyChart;
