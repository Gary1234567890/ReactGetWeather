var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples Page</h1>
            <p>Here are a few examples to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=London'>London</Link>
                </li>
                <li>
                    <Link to='/?location=Paris'>Paris</Link>
                </li>
            </ol>
        </div>

    )
};

module.exports = Examples;
