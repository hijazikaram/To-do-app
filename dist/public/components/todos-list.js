// var _ = require('lodash');
// var React = require('react');
// var TodosListHeader = require('./todos-list-header');
// var TodosListItem = require('./todos-list-item');
//
// export default class TodosList extends React.Component {
//     renderItems() {
//         const props = _.omit(this.props, 'todos');
//
//         return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
//     }
//
//     render() {
//         return (
//             <table>
//                 <TodosListHeader />
//                 <tbody>
//                     {this.renderItems()}
//                 </tbody>
//             </table>
//         );
//     }
// }
"use strict";