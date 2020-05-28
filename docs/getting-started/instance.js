import React from 'react';
import MaterialTable from 'material-table';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Button } from '@material-ui/core';

const Instance = () => {
  const baseUrl = useBaseUrl('/');
  console.log(baseUrl);
  return (
    <MaterialTable
      options={{
        toolbar: false,
        pageSize: 24,
        maxBodyHeight: '60vh'
      }}
      columns={[
        {
          field: 'name',
          title: 'Name',
        },
        {
          field: 'link',
          title: 'Details',
          render: (rowData) => {
            return (
              <Link to={`${baseUrl}${rowData.link}mt_prop_${rowData.name}`}>
                More Info
              </Link>
            );
          },
        },
        {
          field: 'feature',
          title: 'Features',
          render: (rowData) => {
            if (rowData.feature) {
              return (
                <Link to={`${baseUrl}${rowData.feature}`}>
                  Demo
                </Link>
              );
            }
            return "-";
          },
        }
        // { field: 'type', title: 'Type' },
        // { field: 'description', title: 'Description' },
      ]}
      data={[
        {
          name: 'actions',
          link: 'docs/api/props/',
          feature: 'docs/features/feature_actions'
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'columns',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'components',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'data',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'detailPanel',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'editable',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'icons',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'isLoading',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'localization',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'onChangePage',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'onChangeRowsPerPage',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'onChangeColumnHidden',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'onColumnDragged',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'onGroupRemoved',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'onOrderChange',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'onRowClick',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'onSelectionChange',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'onTreeExpandChange',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'onSearchChange',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'options',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'parentChildData',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'style',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'tableRef',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
        {
          name: 'title',
          link: 'docs/api/props/',
          // type: '#TODO',
          // description: '#TODO',
        },
      ]}
    />
  );
};

export default Instance;
