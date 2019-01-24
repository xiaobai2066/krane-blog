var blogDao = require('../dao/BlogDao');
var timeUtil = require('../util/TimeUtil');
var respUtil = require('../util/RespUtil');
var url = require('url');

var path = new Map();

function editBLog (request, response) {
    var params = url.parse(request.url, true).query;
    var tags = params.tags.replace(/ /g, '').replace('，', ',')
    request.on('data', function (data) {
        blogDao.insertBlog(params.title, data.toString(), 0,  timeUtil.getNow(), timeUtil.getNow(), function (result) {
            response.writeHead(200);
            response.write(respUtil.writeResult('success', 'add successful', null));
            response.end();
        });
    });
}
path.set('/editBLog', editBLog);

// function queryEveryDay (request, response) {
//     everyDayDao.queryEveryDay(function (result) {
//         response.writeHead(200);
//         response.write(respUtil.writeResult('success', 'search successful', result));
//         response.end();
//     });
// }
// path.set('/queryEveryDay', queryEveryDay);

module.exports.path = path;