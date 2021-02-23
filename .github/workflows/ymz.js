name: 羊毛赚

on:
  workflow_dispatch:
  watch:
    types: started
  schedule:
    - cron: '0 */12 * * *'
jobs:
  build:
    runs-on: ubuntu-latest       
    steps:
      - name: Checkout
        run: |
          git clone https://github.com/QingAnLe/QingAnLe ~/js
      - name: Use Node.js 14.x
        uses: actions/setup-node@v1
        with:
          node-version: 14.x
      - name: npm install
        run: |
          cd ~/js
          npm install
          npm install cron
          npm install request
      - name: '运行 【羊毛赚】'
        run: |
          cd ~/js   
          node Task/ymz.js
