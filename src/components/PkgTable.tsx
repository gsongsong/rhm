import { Button, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@material-ui/core";
import { useState } from "react";
import { Enum, Pkg } from "../types";
import { findEmptyIndex } from "../utils";

type Props = {
  pkgList: Pkg[];
  lineupList: Enum[];
  onChange: (pkgList: Pkg[]) => void;
  usedPkgIndexList?: number[];
};

export default function PkgTable({ pkgList, lineupList, onChange, usedPkgIndexList }: Props) {
  const [editIndex, setEditIndex] = useState(-1);
  const [name, setName] = useState('');
  const [lineupIndex, setLineupIndex] = useState(-1);
  const [nameNew, setNameNew] = useState('');
  const [lineupIndexNew, setLineupIndexNew] = useState(-1);

  function addPkg() {
    if (!name) {
      return;
    }
    const pkgFound = pkgList.find((pkg) => pkg.name === name);
    if (pkgFound) {
      return;
    }
    const index = findEmptyIndex(pkgList.map((pkg) => pkg.index));
    const pkgListNew = [
      ...pkgList,
      { index, name, lineupIndex },
    ].sort((a, b) => a.name.localeCompare(b.name));
    onChange(pkgListNew);
    setName('');
  }

  function onClickEdit(index: number) {
    const pkgFound = pkgList.find((pkg) => pkg.index === index);
    if (!pkgFound) {
      return;
    }
    setNameNew(pkgFound.name);
    setLineupIndexNew(pkgFound.lineupIndex);
    setEditIndex(index);
  }

  function onSubmitEditPkg(index: number) {
    if (!nameNew) {
      return;
    }
    const pkgFound = pkgList.find((pkg) => pkg.index !== index && pkg.name === nameNew);
    if (pkgFound) {
      return;
    }
    const indexFound = pkgList.findIndex((pkg) => pkg.index === index);
    if (indexFound === -1) {
      return;
    }
    const pkgListNew = [
      ...pkgList.slice(0, indexFound),
      { index, name: nameNew, lineupIndex: lineupIndexNew },
      ...pkgList.slice(indexFound + 1),
    ];
    onChange(pkgListNew);
    setEditIndex(-1);
  }

  function removePkg(index: number) {
    if (usedPkgIndexList && usedPkgIndexList.includes(index)) {
      return;
    }
    const indexFound = pkgList.findIndex((pkg) => pkg.index === index);
    if (indexFound === -1) {
      return;
    }
    const enumListNew = [
      ...pkgList.slice(0, indexFound),
      ...pkgList.slice(indexFound + 1),
    ];
    onChange(enumListNew);
  }

  return (
    <form>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Package</TableCell>
              <TableCell>Lineup</TableCell>
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
                <Select
                  value={lineupIndex} onChange={(e) => setLineupIndex(+(e as any).target.value)}
                  disabled={editIndex !== -1}
                >
                  <MenuItem value={-1}>(None)</MenuItem>
                    {
                      lineupList.map((lineup) => {
                        const { index, name} = lineup;
                        return (
                          <MenuItem key={index} value={index}>{name}</MenuItem>
                        );
                      })
                    }
                </Select>
              </TableCell>
              <TableCell>
                <Button
                  variant='contained'
                  onClick={addPkg}
                  disabled={editIndex !== -1}
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
            {
              pkgList.map((pkg) => {
                const { index, name, lineupIndex } = pkg;
                const lineupFound = lineupList.find((lineup) => lineup.index === lineupIndex);
                const lineup = lineupFound ? lineupFound.name : '(None)';
                return index === editIndex ? (
                  <TableRow key={index}>
                    <TableCell>
                      <TextField
                        label='New name' required
                        value={nameNew} onChange={(e) => setNameNew(e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Select value={lineupIndexNew} onChange={(e) => setLineupIndexNew(+(e as any).target.value)}>
                        <MenuItem value={-1}>(None)</MenuItem>
                        {
                          lineupList.map((lineup) => {
                            const { index, name } = lineup;
                            return (
                              <MenuItem key={index} value={index}>{name}</MenuItem>
                            )
                          })
                        }
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Button variant='contained' onClick={() => onSubmitEditPkg(index)}>Ok</Button>
                      {' '}
                      <Button variant='contained' onClick={() => setEditIndex(-1)}>Cancel</Button>
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow key={index}>
                    <TableCell>{name}</TableCell>
                    <TableCell>{lineup}</TableCell>
                    <TableCell>
                      <Button variant='contained' onClick={() => onClickEdit(index)}>Edit</Button>
                      {' '}
                      <Button variant='contained' onClick={() => removePkg(index)}
                        disabled={usedPkgIndexList && usedPkgIndexList.includes(index)}
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
