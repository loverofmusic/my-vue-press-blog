//侧边栏
module.exports = {
    '/interview/': [
        '',
        {
            title:'框架相关',
            collapsable: true,
            children: [
                'framework/overall.md',
                'framework/react.md',
                'framework/vue.md'
            ]
        },
        {
            title:'JavaScript相关',
            collapsable: true,
            children:[
                'javascript/overall.md',
                'javascript/ts.md',
                'javascript/prototype.md',
                'javascript/closure.md',
                'javascript/async.md'
            ]
        },
        {
            title:'HTML/CSS相关',
            collapsable: true,
            children:[
                'framework/overall.md',
                'framework/overall.md',
                'framework/overall.md'
            ]
        },
        {
            title:'浏览器相关',
            collapsable: true,
            children:[
                'browser/event-mechanism',
                'browser/rendering-mechanism',
                'browser/storage',
                'browser/event-loop',
                'browser/cross-domain'
            ]
        },
        {
            title:'工程化相关',
            collapsable: true,
            children:[
                'build-product/overall.md',
                'build-product/webpack.md'
            ]
        },
        {
            title:'Node.js相关',
            collapsable: true,
            children:[
                'framework/overall.md',
                'framework/overall.md',
                'framework/overall.md'
            ]
        },
        {
            title:'网络相关',
            collapsable: true,
            children:[
                'network/http.md',
                'network/https.md',
                'network/http2.md'
            ]
        },
        {
            title:'性能优化相关',
            collapsable: true,
            children:[
                'performance/overall.md',
                'performance/throttle-debounce.md',
                'performance/lazyload.md'
            ]
        },
        {
            title:'安全相关',
            collapsable: true,
            children:[
                'safety/xss',
                'safety/csrf'
            ]
        },
        {
            title:'管理运维相关',
            collapsable: true,
            children:[
                'framework/overall.md',
                'framework/overall.md',
                'framework/overall.md'
            ]
        },
        {
            title:'编程基础相关',
            collapsable: true,
            children:[
                'framework/overall.md',
                'framework/overall.md',
                'framework/overall.md'
            ]
        },
        {
            title:'面试题',
            collapsable: true,
            children:[
                'subject/console.md',
                'subject/program.md',
                'subject/classic.md'

            ]
        }

    ],
    '/accumulation/': [
        '',
        {
            title:'2020年',
            collapsable: false,
            children:[
                {
                    title:'3月',
                    collapsable: false,
                    children:[
                        '2020/03/27.md',
                        '2020/03/26.md',
                        '2020/03/25.md',
                        '2020/03/24.md',
                        '2020/03/23.md',
                        '2020/03/20.md',
                        '2020/03/19.md',
                        '2020/03/17.md',
                        '2020/03/13.md',
                        '2020/03/12.md',
                        '2020/03/11.md',
                        '2020/03/10.md',
                        '2020/03/09.md',
                    ]
                },
                {
                    title:'2月',
                    collapsable: true,
                    children:[
                        '2020/02/22.md'
                    ]
                }
            ]
        }
    ],
    '/experience/': [
        '',
        {
            title:'Mac',
            collapsable: false,
            children: [
                'Mac/shotcut.md',
                'Mac/settings.md'
            ]
        },
        {
            title:'Linux',
            collapsable: false,
            children: [
                'linux-all/daily.md'
            ]
        },
        {
            title:'收集',
            collapsable: false,
            children: [
                'collection/site.md'
            ]
        }
    ]
}	