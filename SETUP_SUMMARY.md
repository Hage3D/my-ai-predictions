# プロジェクトセットアップとGit/GitHub連携のまとめ

このドキュメントは、AI予測の定点観測ウェブサイトのセットアップと、Git/GitHub連携のための手順をまとめたものです。

## 1. プロジェクトの初期構造とファイル移動

最初に、プロジェクトのディレクトリ構造を整理しました。

-   `forecasts/` ディレクトリを `src/content/` へ移動。
-   `src/index.astro` を `src/pages/` へ移動（ただし、このファイルは途中で再作成）。

**実行コマンド:**
```bash
mkdir src\content
mkdir src\pages
move forecasts src\content\
# src/index.astro は存在しなかったため、このコマンドは失敗しました。
# その後、src/pages/index.astro は新規作成されました。
```

## 2. 必要なnpmパッケージのインストール

Astroプロジェクトで差分表示を行うために必要な `jsdiff` パッケージをインストールしました。

**実行コマンド:**
```bash
npm install jsdiff
```

## 3. `src/pages/index.astro` の作成

AI予測の差分表示ロジックを含む `src/pages/index.astro` ファイルを生成し、書き込みました。
このファイルには、`Astro.glob()` によるデータ取得、`jsdiff` を使用した差分計算、および表示用のHTMLとCSSが含まれています。

## 4. AstroプロジェクトのセットアップとVercelアダプターの追加

Vercelでデプロイするために、Astroプロジェクトとしての設定を行いました。

1.  **Astro本体のインストール:**
    ```bash
npm install astro
```

2.  **`astro.config.mjs` の作成:**
    初期設定ファイルを作成しました。
    ```javascript
import { defineConfig } from 'astro/config';
export default defineConfig({});
```

3.  **Vercelアダプターのインストールと設定:**
    Vercelへのデプロイに必要なアダプターをインストールし、`astro.config.mjs` に設定を追加しました。
    ```bash
npm install @astrojs/vercel
```
    `astro.config.mjs` の内容を以下のように変更しました。
    ```javascript
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});
```

4.  **`package.json` の調整:**
    Astroのビルドスクリプトと `type: "module"` を追加しました。

5.  **`tsconfig.json` の作成:**
    TypeScriptの厳格モード (`strict`) 設定を含む `tsconfig.json` を作成しました。

## 5. Gitのインストールと初期設定

Gitコマンドが認識されない問題が発生したため、Git Bashの使用を推奨しました。

### Gitコマンドが認識されない場合の対処法（Git Bashの使用）

1.  **VS Codeを閉じる。**
2.  Windowsのスタートメニューから「**Git Bash**」を検索して起動する。
3.  Git Bashのターミナルで、プロジェクトのディレクトリに移動する。
    ```bash
cd D:/Gemini-cli/test/my-ai-predictions
```
    *(Git Bashではパスの区切り文字が `/` になります)*

### Gitリポジトリの初期化と最初のコミット

プロジェクトフォルダでGit Bashを開き、以下のコマンドを順番に実行します。

1.  **Gitリポジトリの初期化:**
    プロジェクトフォルダをGitの管理下に置きます。
    ```bash
git init
```
    成功すると `Initialized empty Git repository in D:/Gemini-cli/test/my-ai-predictions/.git/` と表示されます。

2.  **変更をステージングする (Add):**
    プロジェクト内のすべてのファイルをセーブ対象に追加します。
    ```bash
git add .
```
    *(成功しても何もメッセージは表示されません)*

3.  **セーブデータを作成する (Commit):**
    セーブデータ（コミット）を作成し、変更内容を記録します。
    ```bash
git commit -m "Initial commit"
```
    *(変更されたファイルの一覧とサマリーが表示されます)*

## 6. GitHubへのプッシュとVercelでのデプロイ（次のステップ）

上記のGit操作が完了したら、以下の手順でGitHubにプッシュし、Vercelでデプロイできます。

1.  **GitHubで新しいリポジトリを作成する。**
    （例: `my-ai-predictions`）

2.  **ローカルリポジトリとGitHubのリポジトリを接続し、プッシュする。**
    Git Bashで以下のコマンドを実行します。`<your-github-repo-url>` は、GitHubで作成したリポジトリのURLに置き換えてください。
    ```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

3.  **Vercelにデプロイする。**
    Vercelにログインし、GitHubリポジトリをインポートします。VercelがAstroプロジェクトを自動検出し、ビルド・デプロイを行います。

```