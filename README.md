This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 起 server 之前

我諗啲 version 就應該唔係太大分別~

1. 部機要裝左 node.js 先行倒 npm command, 我用個 version 係 v20.10.0
   [https://nodejs.org/en/download](https://nodejs.org/en/download)

2. 跟住裝 git, 我用個 version 係 v2.38.1
   [https://git-scm.com/downloads](https://git-scm.com/downloads)

3. 搵個你哋想 save 嘅 folder location 行

```bash
git clone https://github.com/kluiwork2/cuhk-metabolic-syndrome-website.git
```

4. 開你哋用嘅 IDE, 我用 Visual Studio Code, 開啱啱 git clone 嗰個 folder, 跟住行

```bash
npm install
```

就應該 install 哂個 project 嘅 packages 同 dependenices

## 點起 local environment website 睇

起個 server 行呢個 command

```bash
npm run dev
```

開 [http://localhost:3000](http://localhost:3000) 就睇倒個 website 啦 `suppose`

## Database

database 我用 neon 嘅 postgreSQL

1. 上 [https://neon.tech/](https://neon.tech/)
2. login aegipan.tech@gmail.com account password 都係 69 嗰個
3. 撳 Projects -> cuhk-metabolic-syndrome-website -> Tables -> Database: cuhk-ms 就可以睇呢個 website 嘅 database

## 其他資訊

個 landing page 係 `app/page.tsx`

"# cuhk-metabolic-syndrome-website"
