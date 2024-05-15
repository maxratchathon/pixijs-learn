// OrgChartTree.js
import React from 'react';
import Tree from 'react-d3-tree';


const orgChart = {
  name: 'CEO',
  children: [
    {
      name: 'VP of Production',
      attributes: {
        department: 'Production',
      },
      children: [
        {
          name: 'Production Manager',
          attributes: {
            department: 'Production Management',
          },
          children: [
            {
              name: 'Fabrication Foreman',
              attributes: {
                department: 'Fabrication',
              },
              children: [
                {
                  name: 'Fabrication Worker 1',
                },
                {
                  name: 'Fabrication Worker 2',
                },
              ],
            },
            {
              name: 'Assembly Foreman',
              attributes: {
                department: 'Assembly',
              },
              children: [
                {
                  name: 'Assembly Worker 1',
                },
                {
                  name: 'Assembly Worker 2',
                },
              ],
            },
          ],
        },
        {
          name: 'Quality Control Manager',
          attributes: {
            department: 'Quality Control',
          },
          children: [
            {
              name: 'Inspector 1',
            },
            {
              name: 'Inspector 2',
            },
          ],
        },
      ],
    },
    {
      name: 'VP of Sales',
      attributes: {
        department: 'Sales',
      },
      children: [
        {
          name: 'Sales Manager',
          attributes: {
            department: 'Regional Sales',
          },
          children: [
            {
              name: 'Sales Rep 1',
            },
            {
              name: 'Sales Rep 2',
            },
          ],
        },
        {
          name: 'Account Manager',
          attributes: {
            department: 'Key Accounts',
          },
          children: [
            {
              name: 'Account Executive 1',
            },
            {
              name: 'Account Executive 2',
            },
          ],
        },
      ],
    },
    {
      name: 'VP of Marketing',
      attributes: {
        department: 'Marketing',
      },
      children: [
        {
          name: 'Marketing Manager',
          attributes: {
            department: 'Campaign Management',
          },
          children: [
            {
              name: 'Social Media Specialist',
            },
            {
              name: 'SEO Specialist',
            },
          ],
        },
        {
          name: 'Content Manager',
          attributes: {
            department: 'Content Creation',
          },
          children: [
            {
              name: 'Copywriter',
            },
            {
              name: 'Graphic Designer',
            },
          ],
        },
      ],
    },
  ],
};

export default function OrgChartTree() {
  const nodeSize = { x: 100, y: 100 };
  const nodeSvgShape = {
    shape: 'rect',
    shapeProps: {
      width: 200,
      height: 100,
      x: -100,
      y: -50,
      rx: 10,
      ry: 10,
    },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div id="treeWrapper" style={{ width: '1700px', height: '500px', border: '1px solid black' }}>
        <Tree
          data={orgChart}
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
          orientation="vertical"
          zoomable={true}
          nodeSize={nodeSize}
          nodeSvgShape={nodeSvgShape}
        />
      </div>
    </div>
  );
}