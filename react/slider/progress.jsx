/*jshint esversion: 6 */

if (Meteor.isClient) {
  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    React.render(<Progress />, document.getElementById("render-target"));
  });
}

Progress = React.createClass({
    getInitialState() {
        return {value: 25};
    },
    setValue() {
        this.setState({
            value: this.refs.range.getDOMNode().value
        });
    },
    render() {
        return <div className="react-progress-example">
            <input
                ref="range"
                type="range"
                min="0"
                max="100"
                defaultValue={this.state.value}
                onChange={this.setValue}/>
            <ProgressBar current={this.state.value} total="100"/>
        </div>;
    }
});
