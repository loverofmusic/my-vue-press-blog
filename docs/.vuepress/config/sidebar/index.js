//侧边栏
module.exports = {
  '/system/': [
    '',
    {
      title: '框架相关',
      collapsable: true,
      children: [
        'framework/overall.md',
        'framework/react.md',
        'framework/vue.md',
        'framework/manage-state.md',
      ],
    },
    {
      title: 'JavaScript相关',
      collapsable: true,
      children: [
        'javascript/overall.md',
        'javascript/async.md',
        'javascript/closure.md',
        'javascript/function.md',
        'javascript/prototype.md',
        'javascript/object.md',   
        'javascript/array.md',
        'javascript/type-check.md',
        'javascript/ts.md'
      ]
    },
    {
      title: 'HTML/CSS相关',
      collapsable: true,
      children: ['framework/overall.md', 'framework/overall.md', 'framework/overall.md'],
    },
    {
      title: '浏览器相关',
      collapsable: true,
      children: [
        'browser/event-mechanism',
        'browser/rendering-mechanism',
        'browser/storage',
        'browser/event-loop',
        'browser/cross-domain',
      ],
    },
    {
      title: '工程化相关',
      collapsable: true,
      children: ['build-product/overall.md', 'build-product/webpack.md'],
    },
    {
      title: 'Node.js相关',
      collapsable: true,
      children: ['framework/overall.md', 'framework/overall.md', 'framework/overall.md'],
    },
    {
      title: '网络相关',
      collapsable: true,
      children: ['network/http.md', 'network/https.md', 'network/http2.md'],
    },
    {
      title: '性能优化相关',
      collapsable: true,
      children: [
        'performance/overall.md',
        'performance/cache.md',
        'performance/throttle-debounce.md',
        'performance/lazyload.md',
      ],
    },
    {
      title: '安全相关',
      collapsable: true,
      children: ['safety/xss', 'safety/csrf'],
    },
    {
      title: 'DevOps相关',
      collapsable: true,
      children: ['devops/QA.md', 'devops/docker.md', 'devops/git.md', 'devops/pm2.md'],
    },
    {
      title: '编程基础相关',
      collapsable: true,
      children: ['algorithm/1.md'],
    },
    {
      title: '面试题',
      collapsable: true,
      children: ['subject/console.md', 'subject/program.md', 'subject/classic.md','subject/questions.md'],
    },
  ],
  '/accumulation/': [
    '',
    {
      title: '2020年',
      collapsable: false,
      children: [
        {
          title: '4月',
          collapsable: false,
          children: [
            '2020/04/11.md',
            '2020/04/09.md',
            '2020/04/08.md',
            '2020/04/07.md',
            '2020/04/05.md', 
            '2020/04/02.md'
          ],
        },
        {
          title: '3月',
          collapsable: false,
          children: [
            '2020/03/31.md',
            '2020/03/30.md',
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
          ],
        },
        // {
        //     title:'2月',
        //     collapsable: false,
        //     children:[
        //         '2020/02/22.md'
        //     ]
        // }
      ],
    },
  ],
  '/experience/': [
    '',
    {
      title: '计划',
      collapsable: false,
      children: ['plan/front-end.md'],
    },
    {
      title: 'Mac',
      collapsable: false,
      children: ['Mac/shotcut.md', 'Mac/settings.md'],
    },
    {
      title: 'Linux',
      collapsable: false,
      children: ['linux-all/daily.md'],
    },
    {
      title: '收集',
      collapsable: false,
      children: ['collection/site.md'],
    },
    {
      title: '正则',
      collapsable: false,
      children: ['RegExp/common.md']
    }
  ],
};
