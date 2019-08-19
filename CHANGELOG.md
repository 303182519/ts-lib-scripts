# 变更说明

## next

- feat: 规范 vscode 的换行符和缩进
- fix(ts-lib-tools): 修复在 monorepo 模式下执行 jest 单元测试失败的缺陷
- fix(ts-lib-tools): 修复 monorepo 模式下，yarn lint 找不到文件的缺陷
- fix(ts-lib-scripts): 修复 monorepo 模式，lint-staged 配置错误
- fix: 修复 prepublishOnly 在 monorepo 模式下配置错误
- feat(ts-lib-tools): 生成模块时添加上许可证信息
- fix(ts-lib-tools): 修复`gen`生成的模块缺少.gitignore，导致将很多临时文件发布到 npm 仓库的缺陷
- fix(ts-lib-scripts): 修复 monorepo 模式，tsconfig.json 的 includes 配置错误
- fix(ts-lib-scripts): 修复 monorepo 模式，tsconfig.json 中的 paths 配置错误
- fix(eslint-config-ts-lib): eslint 的 import/no-unresolved 无法解析`tsconfig.json`的`paths`缺陷

## v0.3.5

- chore(ts-lib-scripts): 调整 jest-dom 为@testing-library/jest-dom
- chore(ts-lib-scripts): 添加@testing-library/react-hooks，方便做 react hooks 的单元测试

## v0.3.4

- fix(ts-lib-scripts): 修复未开启 docz，但是生成项目的 README.md 中有 doc 相关命令行说明的缺陷

## v0.3.3 - 2019.7.19

- fix(ts-lib-scripts): 修复 monorepo 项目中多出 src 目录的缺陷

## v0.3.2 - 2019.7.19

- fix(ts-lib-scripts): 修复 monorepo 项目中多出 src 目录的缺陷

## v0.3.1 - 2019.7.19

- fix(ts-lib-scripts): 修复 tsconfig 配置错误，导致 ts 找不到内部模块的缺陷

## v0.3.0 - 2019.7.19

- feat(babel-preset-ts-lib): babel 支持从 tsconfig.json 文件中读取`paths`，作为自定义的模块路径映射
- feat: 支持 monorepo
- fix(ts-lib-scripts): 修复 docz 若干问题

## v0.2.17 - 2019.7.18

- fix(ts-lib-tools): 修复依赖关系错误

## v0.2.16 - 2019.7.18

- fix(ts-lib-tools): 修复依赖关系错误

## v0.2.15 - 2019.7.17

- fix(ts-lib-tools): 修复包括 lodash 导致单元测试失败的缺陷 (#13)

## v0.2.14 - 2019.7.15

- fix(ts-lib-tools): 修复生成 jest 配置错误。

## v0.2.13 - 2019.7.15

- improve(ts-lib-tools): 改进 jest 的监听范围，不再监听生成的文件。

## v0.2.12 - 2019.7.9

- fix(webpack-docz-ghpages-plugin): 修复实现错误

## v0.2.11 - 2019.7.9

- fix(webpack-docz-ghpages-plugin): 修复包主文件错误

## v0.2.10 - 2019.7.9

- fix: 修复 docz 文档发布到 ghpages 上之后，刷新页面进入 404 的缺陷

对于已有项目，手动调整一下：

1. 添加 webpack-docz-ghpages-plugin 依赖

   ```shell
   yarn add webpack-docz-ghpages-plugin --dev
   ```

2. 调整`doczrc.js`文件：

   ```diff

   +  config.plugin('ghpages').use(require('webpack-docz-ghpages-plugin'));

      return config;
   ```

## v0.2.9 - 2019.7.9

- fix(ts-lib-scripts): 修复发布文档命令错误

对于已有项目，手动调整一下`package.json`:

```diff
-  "doc:publish": "docz dev && gh-pages -d .docz/dist"
+  "doc:publish": "docz build && gh-pages -d .docz/dist"
```

## v0.2.8 - 2019.7.8

- fix(ts-lib-tools): 代码中包含@sinoui, sinoui-components 时，jest 单元测试失败
- fix(ts-lib-scripts): 修复 typescript 自动导入时引入了 amd 路径的错误

## v0.2.7 - 2019.7.8

v0.2.6 发布失败，再次发布。

## v0.2.6 - 2019.7.8

- fix(eslint-config-ts-lib): 去掉多余的 react 属性校验

## v0.2.5 - 2019.6.27

- fix(ts-lib-scripts): 修复 GIT 换行符配置错误

对于历史项目，可以手动调整`.gitattributes`文件：

```ini
*.ts text eol=lf
*.tsx text eol=lf
*.js text eol=lf
*.jsx text eol=lf
*.md text eol=lf
*.mdx text eol=lf
*.json text eol=lf
*.lock text eol=lf
.editorconfig text eol=lf
.gitignore text eol=lf
.gitattributes text eol=lf
*.txt text eol=lf
LICENSE text eol=lf

[core]
  autocrlf=input
  safecrlf=true
```

## v0.2.4 - 2019.6.27

- fix(ts-lib-scripts): 修复 GIT 换行符配置错误

对于历史项目，可以手动调整`.gitattributes`文件：

```ini
*.ts text
*.tsx text
*.js text
*.jsx text
*.md text
*.mdx text
*.json text
*.lock text
.editorconfig text
.gitignore text
.gitattributes text
*.txt text
LICENSE text

[core]
  autocrlf=input
  safecrlf=true
```

## v0.2.3 - 2019.6.10

- fix(ts-lib-scripts): 修复 gitattributes 配置错误

## v0.2.2 - 2019.6.6

- fix(babel-preset-ts-lib): 修复 jest 可能执行失败的缺陷

## v0.2.1 - 2019.6.6

- fix(ts-lib-tools): 修复打包失败却没有正常结束打包进程的错误

## v0.2.0 - 2019.6.6

- feat: 创建 React 组件库 🌈
- feat(ts-lib-scripts): 创建项目时，可指定域名项目名称，如：`npx ts-lib-scripts create @sinoui/my-ts-lib`。
- feat(ts-lib-tools): 支持在`src`中直接定义`.d.ts`文件
- fix(ts-lib-tools): 修复`index.ts`中导出了 ts 类型导致编译失败的缺陷
- feat(eslint-config-ts-lib): eslint 检查支持 immer
- fix(ts-lib-scripts): 修复 git 换行符问题
- feat(ts-lib-tools): 打包前清除`dist`文件
- fix(ts-lib-tools): 修复打包失败却仍可发布的缺陷
- fix(ts-lib-tools): 包含 async/await 代码时导致`start`失败的缺陷
- fix(ts-lib-scripts): 修复无法在 mac 创建项目的缺陷
- fix(eslint-config-ts-lib): 修复 prettier 与 react eslint 规则冲突的缺陷
- feat(ts-lib-scripts): 启用[ts incremental](https://devblogs.microsoft.com/typescript/announcing-typescript-3-4/#faster-subsequent-builds-with-the---incremental-flag)

对于历史项目，需要手动调整：

1. 升级`ts-lib-tools@0.2.0`：

   ```json
   {
     "devDependencies": {
       "ts-lib-tools": "^0.2.0"
     }
   }
   ```

2. 为了更好的解决换行符的问题，可以在项目的根目录下添加`.gitattributes`文件，内容如下：（选做）

   ```ini
   [core]
     autocrlf = input
     safecrlf = true
   ```

3. 在`tsconfig.json`中添加`incremental`：（可选）

   ```json
   {
     "compilerOptions": {
       "increumental": true
     }
   }
   ```
