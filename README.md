React-Disqus-Comments
=====================

Reactjs Disqus comments component packaged for Meteor

This package is a wrapper around https://github.com/mzabriskie/react-disqus-thread
### Adding it to your project

~~~
meteor add praneybehl:react-disqus-comments
~~~

Example
=====

http://mzabriskie.github.io/react-disqus-thread/example


Usage
=====

```js

var App = createClass({

	handleNewComment: function(comment) {
		console.log(comment.text);
	}

	render: function () {
		return (
			<ReactDisqusThread
				shortname="example"
				identifier="something-unique-12345"
				title="Example Thread"
				url="http://www.example.com/example-thread"
				category_id="123456"
				onNewComment={this.handleNewComment}/>
		);
	}
});

```

## License

MIT
