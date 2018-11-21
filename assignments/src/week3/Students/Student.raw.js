const React = require('react');

const afolabi = React.createElement('li', { id: 'afolabi_abiodun', key: 'afolabi_abiodun' }, 'Afolabi Abiodun');
const kennedy = React.createElement('li', { id: 'kennedy_ejike', key: 'kennedy_ejike' }, 'Kennedy Ejike');
const kenny = React.createElement('li', { id: 'kenny_emmanuel', key: 'kenny_emmanuel' }, 'Kenny Emmanuel');
const micah = React.createElement('li', { id: 'micah_joel', key: 'micah_joel' }, 'Micah Joel');
const okiki = React.createElement('li', { id: 'okiki_oye-lawrence', key: 'okiki_oye-lawrence' }, 'Okiki Oye-Lawrence');
const sunday = React.createElement('li', { id: 'sunday_aroh', key: 'sunday_aroh' }, 'Sunday Aroh');

const reactFragment = [afolabi, kennedy, kenny, micah, okiki, sunday];
 // console.log(reactElement)
const Students = React.createElement(
   'ul',
   { className: 'myList' },
   reactFragment
 );
console.log(Students);
export default Students;
