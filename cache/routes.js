module.exports = (app) => {
	app.get('/auth', require('/Volumes/Storage/Code/kanban/app/controllers/oAuth.js').AuthURL);
	app.get('/accepted', require('/Volumes/Storage/Code/kanban/app/controllers/oAuth.js').Accepted);
	app.get('/api/mysubreddits', require('/Volumes/Storage/Code/kanban/app/controllers/endpoints.js').mysubreddits);
	app.get('/api/unmoderated/:type?/:name?', require('/Volumes/Storage/Code/kanban/app/controllers/endpoints.js').unmoderated);
	app.get('/dashboard', require('/Volumes/Storage/Code/kanban/app/controllers/home.js').dashboard);
	app.get('/redis', require('/Volumes/Storage/Code/kanban/app/controllers/home.js').redis);
	app.get('/admin', require('/Volumes/Storage/Code/kanban/app/controllers/admin.js').get);}