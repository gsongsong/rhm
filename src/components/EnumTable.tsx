import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@material-ui/core";
import { useState } from "react";
import { Enum } from "../types";
import { findEmptyIndex } from "../utils";

type Props = {
  title: string;
  enumList: Enum[];
  onChange: (enumList: Enum[]) => void;
  usedIndexList?: number[];
};

export default function EnumTable({ title, enumList, onChange, usedIndexList }: Props) {
  const [editIndex, setEditIndex] = useState(-1);
  const [name, setName] = useState('');
  const [nameNew, setNameNew] = useState('');

  function addEnumItem() {
    if (!name) {
      return;
    }
    const enumItemFound = enumList.find((enumItem) => enumItem.name === name);
    if (enumItemFound) {
      return;
    }
    const index = findEmptyIndex(enumList.map((enumItem) => enumItem.index));
    const enumListNew = [
      ...enumList,
      { index, name },
    ].sort((a, b) => a.name.localeCompare(b.name));
    onChange(enumListNew);
    setName('');
  }

  function onClickEdit(index: number) {
    const enumItem = enumList.find((enumItem) => enumItem.index === index);
    if (!enumItem) {
      return;
    }
    setNameNew(enumItem.name);
    setEditIndex(index);
  }

  function onSubmitRename(index: number) {
    if (!nameNew) {
      return;
    }
    const enumItemFound = enumList.find((enumItem) => enumItem.index !== index && enumItem.name === nameNew);
    if (enumItemFound) {
      return;
    }
    const indexFound = enumList.findIndex((enumItem) => enumItem.index === index);
    if (indexFound === -1) {
      return;
    }
    const enumListNew = [
      ...enumList.slice(0, indexFound),
      { index, name: nameNew },
      ...enumList.slice(indexFound + 1),
    ];
    onChange(enumListNew);
    setEditIndex(-1);
  }

  function removeEnumItem(index: number) {
    if (usedIndexList && usedIndexList.includes(index)) {
      return;
    }
    const indexFound = enumList.findIndex((enumItem) => enumItem.index === index);
    if (indexFound === -1) {
      return;
    }
    const enumListNew = [
      ...enumList.slice(0, indexFound),
      ...enumList.slice(indexFound + 1),
    ];
    onChange(enumListNew);
  }

  return (
    <form>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{title}</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  label='Name' required
                  value={name} onChange={(e) => setName(e.target.value)}
                  disabled={editIndex !== -1}
                />
              </TableCell>
              <TableCell>
                <Button
                  variant='contained' onClick={addEnumItem}
                  disabled={editIndex !== -1}
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
            {
              enumList.map((enumItem) => {
                const { index, name } = enumItem;
                return index === editIndex ? (
                  <TableRow key={index}>
                    <TableCell>
                      <TextField
                        label='New name' required
                        value={nameNew} onChange={(e) => setNameNew(e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Button variant='contained' onClick={() => onSubmitRename(index)}>Ok</Button>
                      {' '}
                      <Button variant='contained' onClick={() => setEditIndex(-1)}>Cancel</Button>
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow key={index}>
                    <TableCell>{name}</TableCell>
                    <TableCell>
                      <Button variant='contained' onClick={() => onClickEdit(index)}>Edit</Button>
                      {' '}
                      <Button variant='contained' onClick={() => removeEnumItem(index)}
                        disabled={usedIndexList && usedIndexList.includes(index)}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </form>
  );
}
