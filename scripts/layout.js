var MapBox = React.createClass({
    render: function() {
        return (
            <div id="map" class="map" className="map">
            </div>
        );
    }
});

  
ReactDOM.render(
    <MapBox />,
    document.getElementById("content")
);
    
