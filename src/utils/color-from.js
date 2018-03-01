import purple from 'material-ui/colors/purple';
import deepPurple from 'material-ui/colors/deepPurple'
import red from 'material-ui/colors/red';
import indigo from 'material-ui/colors/indigo';
import blue from 'material-ui/colors/blue';
import teal from 'material-ui/colors/teal'
import green from 'material-ui/colors/green';
import lime from 'material-ui/colors/lime';
import yellow from 'material-ui/colors/yellow';
import amber from 'material-ui/colors/amber'
import orange from 'material-ui/colors/orange';
import blueGrey from 'material-ui/colors/blueGrey';
import deepOrange from 'material-ui/colors/deepOrange';

const color = [
  purple, deepPurple, red, indigo, blue, teal, green, lime, yellow, amber, orange, blueGrey, deepOrange
];

export default function colorFrom(string) {
  try {

    const index = string
      .toString()
      .split('')
      .map(char => char.charCodeAt())
      .reduce((sum, num) => sum + num, 0);

    const colorIndex = index % color.length;

    return color[colorIndex][500]

  }catch (e) {
    console.error(e);
    return blueGrey[500]
  }
}









