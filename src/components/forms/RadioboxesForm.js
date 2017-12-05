import React from 'react';
import ClickToEdit from 'react-click-to-edit';
import {Radio,Button,Segment} from 'semantic-ui-react';


class RadioboxesForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      documents: []
    }

    this.add = this.add.bind(this);
  }
  add() {
   const documents = this.state.documents.concat(RadioboxesForm);
   this.setState({ documents});
 }
  render() {
    const documents = this.state.documents.map((Element, index) => {
     return <Element key={ index } index={ index } />
   });
    return(
      <div>
        <Segment.Group horizontal>
            <Radio label={{children:<ClickToEdit
              style={{leftMargin:'20px'}}
              endEditing={(value) => console.log(`New value: ${value}`)}
              >
              Radio 1
            </ClickToEdit>}} />
            <Button icon='plus' onClick={this.add} />
            <Button icon='delete' />
          </Segment.Group>
        { documents }
        </div>
      );
    }
}
export default RadioboxesForm;
