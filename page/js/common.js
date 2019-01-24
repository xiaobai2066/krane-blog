var randomTags = new Vue({
    el: '#random_tags',
    data () {
        return {
            tags: ['linux', 'react', 'mysql', 'mongodb', 'redis', 'ios', 'php', 'angular', 'vue', 'es6', 'css', 'html', 'javascript', 'h5']
        }
    },
    computed: {
        randomColor () {
            return () => {
                var red = Math.random() * 255;
                var blue = Math.random() * 255;
                var green = Math.random() * 255;
                return 'rgb(' + red + ',' + blue + ',' + green + ')';
            }
        },
        randomSize () {
            return () => {
                var size = (Math.random() * 20 + 12) + 'px';
                return size;
            }
        }
    }
});

var recentHotBlogs = new Vue({
    el: '#recent_hot_blogs',
    data () {
        return {
            hotList: [
                { title: 'this is a tile', link: 'https://www.baidu.com' },
                { title: 'this is a tile', link: 'https://www.baidu.com' },
                { title: 'this is a tile', link: 'https://www.baidu.com' },
                { title: 'this is a tile', link: 'https://www.baidu.com' },   
                { title: 'this is a tile', link: 'https://www.baidu.com' },
                { title: 'this is a tile', link: 'https://www.baidu.com' }
            ]
        }
    }
});

var recentComments = new Vue({
    el: '#recent_comments',
    data () {
        return {
            commentList: [
                { name: 'jony', comment: 'hello world', date: '2018-10-10' },
                { name: 'jony', comment: 'hello world', date: '2018-10-10' },
                { name: 'jony', comment: 'hello world', date: '2018-10-10' },
                { name: 'jony', comment: 'hello world', date: '2018-10-10' },
                { name: 'jony', comment: 'hello world', date: '2018-10-10' },
                { name: 'jony', comment: 'hello world', date: '2018-10-10' },
                { name: 'jony', comment: 'hello world', date: '2018-10-10' }
            ]
        }
    }
});