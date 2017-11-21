import React from 'react';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
  dropdown: {
    verticalAlign: -19,
  }
};

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class AppBarExampleIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange(event, index, value) {
    this.setState({value})
  }
  render() {
    return <div>
        <TextField
          type="text"
          hintText="Hint Text"
        />
        <DropDownMenu
          value={this.state.value}
          style={styles.dropdown}
          onChange={this.handleChange}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="Custom width" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
      </div>
  }
}

export default AppBarExampleIcon;
