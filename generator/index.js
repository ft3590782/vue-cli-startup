// generator
module.exports = (api, options, rootOptions) => {
  // 添加编译指令
  api.extendPackage({
    scripts: {
      'start': 'npm run dev',
      'dev': 'vue-cli-service serve --mode dev',
      'build:uat': 'vue-cli-service build --mode uat',
      'build:prod': 'vue-cli-service build --mode prod'
    }
  })

  api.extendPackage({
    dependencies: {
      'dayjs': '^1.8.20',
      'normalize.css': '^8.0.1',
      'axios': '^0.18.0',
      'lodash': '^4.17.15',
      'fastclick': '^1.0.6',
      'lib-flexible': '^0.3.2',
    }
  })

  // 删除 vue-cli3 默认的 /src 和 /public 目录
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path])
  })

  // 根据自定义模板生成项目结构
  api.render('./template')

    // 屏蔽 generator 之后的文件写入操作
  api.onCreateComplete(() => {
    process.env.VUE_CLI_SKIP_WRITE = true
  })
}
