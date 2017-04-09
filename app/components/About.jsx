var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About Page</h1>
            <p>Gets the weather from api.openweathermap.org and displays it using React.</p>
            <p>
                Here are some of the tools used to create the app.
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - API searched to get weather.
                </li>
            </ul>
        </div>
            
        )
};

module.exports = About;