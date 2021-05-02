![](https://img.shields.io/badge/updated-5/1/21-green.svg)
![](https://img.shields.io/badge/react-v16.13.1-61DAFB.svg)
![](https://img.shields.io/badge/npm-v6.14.8-C12026.svg)
![](https://img.shields.io/badge/node-v12.18.3-006E00.svg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local development

```bash
git clone git@github.com:kenziebottoms/kenziebottoms.github.io.git
cd kenziebottoms.github.io.git
npm install
npm start
```

## Deployment

```bash
git checkout dev
npm run deploy
git checkout gh-pages
cp -r build/* .
rm -rf build
git checkout dev CNAME
git branch -D main
git checkout -b main
git add .
git commit -m "deploy ${mm/dd/yy}"
git push origin main --force
```