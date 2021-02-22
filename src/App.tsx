import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Form, Header, Menu, Segment } from 'semantic-ui-react';
import Customer from './components/Customer';
import Lineup from './components/Lineup';

const PANE_VERSION = 'version';
const PANE_LINEUP = 'lineup';
const PANE_PACKAGE = 'package';
const PANE_CUSTOMER = 'customer';

function App() {
  const [featureName, setFeatureName] = useState('Untitled');
  const [pane, setPane] = useState(PANE_LINEUP);

  return (
    <div className="App">
      <Menu pointing>
        <Menu.Item>New</Menu.Item>
        <Menu.Item>
          <Form>
            <Form.Field>
              <input value={featureName} onChange={(e) => setFeatureName(e.target.value)} />
            </Form.Field>
          </Form>
        </Menu.Item>
        <Menu.Item>Load</Menu.Item>
        <Menu.Item>Save</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            active={pane === PANE_VERSION}
            onClick={() => setPane(PANE_VERSION)}
          >
            Versions
          </Menu.Item>
          <Menu.Item
            active={pane === PANE_LINEUP}
            onClick={() => setPane(PANE_LINEUP)}
          >
            Lineups
          </Menu.Item>
          <Menu.Item
            active={pane === PANE_PACKAGE}
            onClick={() => setPane(PANE_PACKAGE)}
          >
            Packages
          </Menu.Item>
          <Menu.Item
            active={pane === PANE_CUSTOMER}
            onClick={() => setPane(PANE_CUSTOMER)}
          >
            Customers
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      {
        pane === PANE_VERSION ? (
          <Container as={Segment}>
            <Header as='h1'>Versions</Header>
          </Container>
        ) : <></>
      }
      {
        pane === PANE_LINEUP ? (
          <Container as={Segment}>
            <Header as='h1'>Lineups</Header>
            <Lineup />
          </Container>
        ) : <></>
      }
      {
        pane === PANE_PACKAGE ? (
          <Container as={Segment}>
            <Header as='h1'>Packages</Header>
          </Container>
        ) : <></>
      }
      {
        pane === PANE_CUSTOMER ? (
          <Container as={Segment}>
            <Header as='h1'>Customers</Header>
            <Customer />
          </Container>
        ) : <></>
      }
    </div>
  );
}

export default App;
