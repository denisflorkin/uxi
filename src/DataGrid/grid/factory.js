import React from 'react';
import {
  TableBody,
  TableRow,
  TableHeader,
  TableHeaderColumn,
  TableRowColumn,
} from '../../Table';
import TableHeaderCheckedAllCell from '../../Table/TableHeaderCheckedAllCell';

import DataGridSorting from './DataGridSorting';

export const createDataGridCell = property => (
  <TableRowColumn>
    {property}
  </TableRowColumn>
);

export const createDataGridColumn = viewModel => (
  <TableRow key={viewModel.key} data-key={viewModel.key} value={viewModel.key}>
    {
      viewModel.properties.map(
        property => (
          createDataGridCell(property)
        ),
      )
    }
  </TableRow>
);

export const createDataGridBody = (viewModels, isHidden) => {
  const result = [];

  viewModels.forEach((viewModel) => {
    result.push(
      createDataGridColumn(viewModel),
    );
  });

  return (
    <TableBody style={isHidden ? { visibility: 'hidden' } : {}}>
      {result}
    </TableBody>
  );
};

export const createDataGridHeader = (headers = [], fixedHeight, hideHeader, withCheckbox, checkAllHandler) => (
  <TableHeader>
    <TableRow>
      {withCheckbox && <TableHeaderCheckedAllCell onCheckAll={checkAllHandler} />}
      {
        headers.map((header) => {
          const key = `header-${header.name || header.displayName}`;
          if (!header.isSortable) {
            return (
              <TableHeaderColumn style={hideHeader ? { visibility: 'hidden' } : {}} key={key}>{header.displayName}</TableHeaderColumn>
            );
          }
          return (
            <DataGridSorting style={hideHeader ? { visibility: 'hidden' } : {}} key={key} title={header.displayName} />
          );
        })
      }
    </TableRow>
  </TableHeader>
);

export default {
  createDataGridHeader,
  createDataGridBody,
  createDataGridColumn,
  createDataGridCell,
};
