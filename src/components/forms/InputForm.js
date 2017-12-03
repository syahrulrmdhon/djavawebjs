import React from 'react';
import {Input} from 'semantic-ui-react';


class InputForm extends React.Component {
  render() {
    return(
      <div>
            <Input placeholder='defaultValue' style={{ minWidth: 400}} />
        </div>
      );
    }
}
export default InputForm;
