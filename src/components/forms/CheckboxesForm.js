import React from 'react';
import ClickToEdit from 'react-click-to-edit';
import {Checkbox,Button,Segment} from 'semantic-ui-react';


class CheckboxesForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      documents: []
    }

    this.add = this.add.bind(this);
  }
  add() {
   const documents = this.state.documents.concat(CheckboxesForm);
   this.setState({ documents});
 }
  render() {
    const documents = this.state.documents.map((Element, index) => {
     return <Element key={ index } index={ index } />
   });
    return(
          <div>
          <Segment.Group horizontal>
            <Checkbox label={{ children: <ClickToEdit
              customStyle='myStyle'
              endEditing={(value) => console.log(`New value: ${value}`)}
              >
              Checkbox 1
            </ClickToEdit> }} />
            <Button icon='plus'onClick={this.add} />
            <Button icon='delete' />
          </Segment.Group>
        { documents }
        </div>
      );
    }
}
export default CheckboxesForm;
