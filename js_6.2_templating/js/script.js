$(function() {

	var html = $('#test').html();

	var articles = [
	{
		title: 'Article 1',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, amet voluptas possimus illo necessitatibus quidem velit ad laudantium, nisi adipisci facilis ducimus a delectus dicta, facere recusandae error? Impedit, quis.' 
	},
	{

		title: 'Article 2',
		content: 'ctus dicta, facere recusandae error? Impedit, quis.' 
	},
	{

		title: 'Article 3',
		content: 'Dolores, amet voluptas possimus illo necessitatibus quidem velit ad laudantium, nisi adipisci facilis ducimus a delectus dicta, facere recusandae error? Impedit, quis.' 
	}
	];

	var content = tmpl(html, {
		data: articles
	});
	$('body').append(content);

});