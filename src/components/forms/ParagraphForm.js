import React from 'react';
import {TextArea} from 'semantic-ui-react';


class ParagraphForm extends React.Component {
  render() {
    return(
      <div>
            <TextArea placeholder='defaultValue' style={{ minWidth: 400,minHeight: 100 }} />
      </div>
      );
    }
}
export default ParagraphForm;
