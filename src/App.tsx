import { Accordion, AccordionDetails, AccordionSummary, AppBar, Button, Container, InputBase, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import { createRef, useState } from 'react';
import './App.css';
import EnumTable from './components/EnumTable';
import PkgTable from './components/PkgTable';
import VersionEditor from './components/VersionEditor';
import { Enum, Pkg, Version } from './types';
import { load } from './utils';

const UNTITLED = 'Untitled';

const PANE_VERSION = 'version';
const PANE_LINEUP = 'lineup';
const PANE_PACKAGE = 'package';
const PANE_CUSTOMER = 'customer';

function App() {
  const refLoad = createRef<HTMLInputElement>();
  let file: File | undefined;
  const refSave = createRef<HTMLAnchorElement>();
  const [featureName, setFeatureName] = useState(UNTITLED);
  const [versionList, setVersionList] = useState<Version[]>([]);
  const [lineupList, setLineupList] = useState<Enum[]>([]);
  const [pkgList, setPkgList] = useState<Pkg[]>([]);
  const [customerList, setCustomerList] = useState<Enum[]>([]);
  const [pane, setPane] = useState(PANE_VERSION);
  const [tabValue, setTabValue] = useState(0);

  function onChangeFile(e: React.ChangeEvent<HTMLInputElement>) {
    const { files } = e.target;
    if (!files) {
      return;
    }
    file = files[0];
    if (!file) {
      return;
    }
    reader.readAsText(file);
  }

  function onChangeTabValue(event: React.ChangeEvent<{}>, value: any) {
    setTabValue(+value);
  }

  function onClickNew() {
    setFeatureName(UNTITLED);
    setVersionList([]);
    setLineupList([
      { index: 0, name: '(None)' },
    ]);
    setPkgList([]);
    setCustomerList([]);
  }

  function onClickSave() {
    if (refSave.current === null) {
      return;
    }
    const blob = new Blob(
      [JSON.stringify({ versionList, lineupList, pkgList, customerList })],
      { type: 'application/json' },
    );
    refSave.current.download = `${featureName}.json`;
    refSave.current.href=window.URL.createObjectURL(blob);
    refSave.current.click();
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    if (!file) {
      return;
    }
    if (!e.target) {
      return;
    }
    const { result } = e.target;
    if (result === null || result instanceof ArrayBuffer) {
      return;
    }
    const { name } = file;
    const indexLast = name.lastIndexOf('.');
    const featureName = name.substring(0, indexLast);
    const { versionList, lineupList, pkgList, customerList } = load(result);
    setFeatureName(featureName);
    setCustomerList(customerList);
    setLineupList(lineupList);
    setPkgList(pkgList);
    setVersionList(versionList);
  }

  const usedLineupIndexList = [
    ...versionList.map((version) => {
      return version.changeList.map((change) => change.lineupIndex);
    }).reduce((indexPrevList, indexList) => {
      return [...indexPrevList, ...indexList];
    }, []),
    ...pkgList.map((pkg) => pkg.lineupIndex),
  ];
  const usedPkgIndexList = [
    ...versionList.map((version) => {
      return version.releaseList.map((release) => release.pkgIndex);
    }).reduce((indexPrevList, indexList) => {
      return [...indexPrevList, ...indexList];
    }, []),
  ];
  const usedCustomerIndexList = [
    ...versionList.map((version) => {
      return version.changeList.map((change) => change.customerIndexList).reduce((indexListPrev, indexList) => {
        return [
          ...indexListPrev,
          ...indexList,
        ];
      }, []);
    }).reduce((indexPrevList, indexList) => {
      return [...indexPrevList, ...indexList];
    }, []),
    ...versionList.map((version) => {
      return version.releaseList.map((release) => release.customerIndexList).reduce((indexListPrev, indexList) => {
        return [
          ...indexListPrev,
          ...indexList,
        ];
      }, []);
    }).reduce((indexPrevList, indexList) => {
      return [...indexPrevList, ...indexList];
    }, []),
  ];

  return (
    <div className="App">
      <AppBar position='static' style={{ marginBottom: '1em' }}>
        <Toolbar>
          <Button>New</Button>
          <Button>Load</Button>
          <InputBase />
          <Button>Save</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <AppBar position='static'>
          <Tabs value={tabValue} onChange={onChangeTabValue}>
            <Tab label='Versions' />
            <Tab label='Customers' />
            <Tab label='Lineups' />
            <Tab label='Packages' />
          </Tabs>
        </AppBar>
        <div hidden={tabValue !== 0}>
          <Typography>Versions</Typography>
        </div>
        <div hidden={tabValue !== 1}>
          <EnumTable title='Customers' enumList={customerList} onChange={setCustomerList} />
        </div>
        <div hidden={tabValue !== 2}>
          <EnumTable title='Lineups' enumList={lineupList} onChange={setLineupList} />
        </div>
        <div hidden={tabValue !== 3}>
          <PkgTable pkgList={pkgList} lineupList={lineupList} onChange={setPkgList} />
        </div>
      </Container>
    </div>
  );
}

export default App;
