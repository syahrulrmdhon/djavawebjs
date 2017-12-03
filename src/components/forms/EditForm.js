import React from 'react';
import ClickToEdit from 'react-click-to-edit';
import DropdownForm from '../forms/DropdownForm';
import ParagraphForm from '../forms/ParagraphForm';
import CheckboxesForm from '../forms/CheckboxesForm';
import InputForm from '../forms/InputForm';
import RadioboxesForm from '../forms/RadioboxesForm';
import {Header,Segment,Dropdown,Container,Button,Form,Icon} from 'semantic-ui-react';


class EditForm extends React.Component {
  componentWillMount() {
    this.setState({
      options: [
        { key: 1, text: 'Input', value: 'input' },
        { key: 2, text: 'Dropdown', value: 'dropdown' },
        { key: 3, text: 'Radio Boxes', value: 'radioboxes' },
        { key: 4, text: 'Checkboxes', value: 'checkboxes' },
        { key: 5, text: 'Paragraph', value:'paragraph'},
      ],
      selected: ['input'],
    });
  }
  constructor(props){
    super(props);

    this.state = {
      documents: []
    }
    this.add = this.add.bind(this);
  }
  handleChange = (e, { value }) => this.setState({
     value
   })
   add() {
    const documents = this.state.documents.concat(EditForm);
    this.setState({ documents});
  }
  render() {
     const { value } = this.state
     const documents = this.state.documents.map((Element, index) => {
      return <Element key={ index } index={ index } />
    });
    return(
      <div>
        <Segment>
            <Segment.Group horizontal>
              <Segment clearing>
                <Header as='h4' floated='left'>
                    <ClickToEdit
                      customStyle='myStyle'
                      endEditing={(value) => console.log(`New value: ${value}`)}
                      >
                      Example Label
                    </ClickToEdit>
                  </Header>
                  <Container textAlign='right'>
                      <Dropdown selection
                        onChange={this.handleChange}
                        options={this.state.options}
                        value={value}
                        defaultValue={this.state.selected}
                      />
                  </Container>
                </Segment>
            </Segment.Group>
              {value === 'dropdown' && <DropdownForm>...</DropdownForm>}
              {value === 'radioboxes' && <RadioboxesForm>...</RadioboxesForm>}
              {value === 'input' && <InputForm>...</InputForm>}
              {value === 'checkboxes' && <CheckboxesForm>...</CheckboxesForm>}
              {value === 'paragraph' && <ParagraphForm>...</ParagraphForm>}
            <Form labeled='true'>
              <Form.Group widths='equal'>
              <Form.Field >
                <Button animated='vertical' floated='right' >
                  <Button.Content hidden>Delete</Button.Content>
                  <Button.Content visible>
                    <Icon name='trash outline' />
                  </Button.Content>
                </Button>
                <Button animated='vertical' floated='right'>
                  <Button.Content hidden>Copy</Button.Content>
                  <Button.Content visible>
                    <Icon name='copy' />
                  </Button.Content>
                </Button>
              </Form.Field>
              </Form.Group>
            </Form>
          <Button icon='add' onClick={this.add} fluid ></Button>
          </Segment>
          { documents }
        </div>
    );
  }
}

export default EditForm;
