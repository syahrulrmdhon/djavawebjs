import React from 'react';
import EditForm from '../forms/EditForm';
import PreviewForm from '../forms/PreviewForm';
import JsonForm from '../forms/JsonForm';
import {Container,Header,Segment,Icon,Button,Input} from 'semantic-ui-react';

class FormGenerator extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      documents: [],
      value:'edit'
    }
  }
  edit(){
    this.setState({value: 'edit'});
  }
  preview(){
    this.setState({value: 'preview'});
  }
  json(){
    this.setState({value: 'json'});
  }
  render() {
    const { value } = this.state
    return(
      <div className='form'>
      <style>{`
          body > div,
          body > div > div,
          body > div > div > div.form {
          height: 100%;
          margin: 50px 0 0 0;
          }
      `  }</style>
        <Container style={{paddingBottom: '5em' }} text>
          <Segment attached style={{background:'#f4d742'}}>
          <Segment attached style={{border:'none',background:'#f4d742'}}>
            <Header as='h2' >
              <Icon name='browser' />
              <Header.Content>
                Djavaweb Form Generator
              </Header.Content>
             </Header>
             </Segment>
          </Segment>
          <Segment attached style={{background:'#e0e1e2' }} textAlign='center'>
            <Button.Group>
              <Button
                onClick={this.edit.bind(this)}
                content='Edit'
                icon='edit'
                labelPosition='left'/>
              <Button
                onClick={this.preview.bind(this)}
                content='Preview'
                icon='eye'
                labelPosition='left'/>
              <Button
                onClick={this.json.bind(this)}
                content='JSON'
                icon='database'
                labelPosition='left'/>
            </Button.Group>
          </Segment>
          <Segment attached>
              {value === 'edit' && <EditForm>...</EditForm>}
              {value === 'preview' && <PreviewForm>...</PreviewForm>}
              {value === 'json' && <JsonForm>...</JsonForm>}
          </Segment>
        </Container>
      </div>
    );
  }
}

export default FormGenerator;
