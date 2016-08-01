import React from 'react';

import {Container} from 'app/components';

export default () => (
    <Container>
        <h1>Guidelines</h1>
        <p>Running tests (<code>npm test</code>), a series of errors will be reported.</p>
        <p>Initially correct errors in <code>app/questions.js</code>. Then finalize About and Contact pages.</p>

        <dl>
            <dt>About</dt>
            <dd>PSingle page, only with images and content Lorem.</dd>
            <dt>Contact</dt>
            <dd>Entry form, which should generate a register calling the contact API.</dd>
            <dt>Bonus</dt>
            <dd>In addition, a bonus page can be created with the listing operations , editing and deletion of contact data.</dd>
        </dl>

        <h2>Access to Data</h2>
        <p>
            In that same project , run <code>npm run server</code>, to start the API server on port 3001.<br />
            Possible endpoints , and the parameters of input and output , are in <a href="http://localhost:3001/documentation" target="_blank">documentação</a> da API.
        </p>

        <h2>Notes</h2>
        <p>
            It is not mandatory to use this web project is also accepted the creation of a new structure using vanilla , libs or frameworks you prefer.<br />
            However , the activities keep the same:
        </p>
        <ul>
            <li>Complete functions in app/questions.js;</li>
            <li>Creating pages About e Contact (conectada a API);</li>
            <li>Bonus Page.</li>
        </ul>

        <h2>Techniques</h2>
        <ul>
            <li>Terminal Linix</li>
            <li>Version control</li>
            <li>Tests</li>
            <li>API (JSON)</li>
            <li>Framework JS MV*</li>
            <li>Componentization</li>
            <li>Style Guides</li>
            <li>Debugging</li>
        </ul>

        <h2>Technologies</h2>
        <ul>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference" target="_blank">HTML</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference" target="_blank">Javascript</a> (<a href="https://ponyfoo.com/articles/es6" target="_blank">ES2015</a> - <a href="https://babeljs.io" target="_blank">Babel</a>)</li>
            <li><a href="https://facebook.github.io/react/docs/thinking-in-react.html" target="_blank">React</a></li>
            <li><a href="http://blog.andrewray.me/flux-for-stupid-people/" target="_blank">Flux</a> - <a href="http://alt.js.org/guide/" target="_blank">Alt</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference" target="_blank">CSS</a></li>
            <li><a href="http://lesscss.org/" target="_blank">Less</a></li>
            <li><a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/" target="_blank">BEM</a></li>
            <li><a href="https://github.com/petehunt/webpack-howto" target="_blank">Webpack</a></li>
            <li><a href="http://karma-runner.github.io" target="_blank">Karma</a></li>
            <li><a href="http://jasmine.github.io/edge/introduction.html" target="_blank">Jasmine</a></li>
        </ul>
    </Container>
);
