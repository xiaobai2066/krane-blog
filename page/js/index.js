var everyday = new Vue({
    el: '#every_day',
    data () {
        return {
            content: 'This is a new life for today'
        }
    },
    computed: {
        getContent () {
            return this.content
        }
    },
    created () {
        // request data
        axios({
            method: 'get',
            url: '/queryEveryDay'
        }).then(function (res) {
            console.log(res);
            everyday.content = res.data.data[0].content;
        }).catch(function (err) {
            console.log('请求失败')
        });
    }
});

var ariticleList = new Vue({
    el: '#article_list',
    data () {
        return {
            articleList: [
                {
                    title: '四联杀幽门杆菌第三天',
                    content: 'Some quick example text to build on the card title and make up the bulk of the card',
                    date: '2018-10-10',
                    views: '101',
                    tags: 'test1 test2',
                    id: '1',
                    link: 'https://www.baidu.com'
                },
                {
                    title: '四联杀幽门杆菌第三天',
                    content: 'Some quick example text to build on the card title and make up the bulk of the card',
                    date: '2018-10-10',
                    views: '101',
                    tags: 'test1 test2',
                    id: '1',
                    link: ''
                },
                {
                    title: '四联杀幽门杆菌第三天',
                    content: 'Some quick example text to build on the card title and make up the bulk of the card',
                    date: '2018-10-10',
                    views: '101',
                    tags: 'test1 test2',
                    id: '1',
                    link: ''
                },
                {
                    title: '四联杀幽门杆菌第三天',
                    content: 'Some quick example text to build on the card title and make up the bulk of the card',
                    date: '2018-10-10',
                    views: '101',
                    tags: 'test1 test2',
                    id: '1',
                    link: ''
                }
            ]
        }
    }
});