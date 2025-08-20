// frontend/src/locale/ja.js
const ja = {
  app: {
    title: "配布抽選システム",
    nav: {
      prizes: "抽選予定（参加者向け）",
      adminList: "管理：賞品一覧・作成",
      adminDebug: "（開発者向け）デバッグ",
    },
  },
  prizes: {
    title: "抽選予定（参加者向け）",
    note: "公開日時（JST）以降に、各賞品ページで抽選結果を確認できます。",
    empty:
      "現在、公開予定の抽選はありません。しばらくしてから再度ご確認ください。",
    publishAt: (txt) => `公開日時（JST）: ${txt}`,
    openParticipant: "参加者ページを開く",
    saveQrPng: "QRコードをPNGで保存",
  },
  participant: {
    title: "抽選結果確認",
    labels: {
      entryNumber: "エントリー番号",
      password: "パスワード",
    },
    hint: "エントリー番号とパスワードは配布物のQRコード横をご確認ください。",
    check: "結果を確認する",
    result: {
      win: (name) => `🎉 おめでとうございます！「${name}」に当選しました！`,
      lose: (name) => `残念ながら「${name}」には当選しませんでした。`,
      notPublished:
        "抽選結果はまだ公開されていません。公開日時（JST）以降に再度お試しください。",
      notFound:
        "エントリーが見つかりません。番号とパスワードをご確認ください。",
      required: "エントリー番号とパスワードを入力してください。",
    },
  },
  admin: {
    title: "管理：賞品一覧・作成",
    create: {
      section: "賞品の新規作成",
      id: "賞品ID（例: B002）",
      name: "賞品名",
      publishAt: "公開日時（JST）※現在時刻＋1時間が初期値",
      submit: "賞品を作成",
    },
    csv: {
      section: "参加者エントリーの一括投入（CSV）",
      prizeId: "対象の賞品ID（例: B001）",
      modeKeep: "既存を維持（新規のみ追加）",
      sampleTitle: "CSVフォーマット（1行目は必ずヘッダ）：",
      sampleCode:
        "entry_number,password,is_winner\n001,1111,true\n002,2222,false",
    },
    card: {
      publishAt: (txt) => `公開日時（JST）: ${txt}`,
      openParticipant: "参加者ページを開く",
      saveQrPng: "QRコードをPNGで保存",
      edit: "編集",
    },
    edit: {
      title: "管理：賞品編集",
      name: "賞品名",
      publishAt: "公開日時（JST）",
      save: "変更を保存",
      delete: "この賞品を削除",
      confirmDelete: "本当に削除しますか？参加者エントリーも削除されます。",
    },
    toast: {
      saved: "保存しました。",
      created: "作成しました。",
      imported: "CSVを取り込みました。",
      authFail: "認証に失敗しました。管理シークレットを確認してください。",
      network: "通信エラーが発生しました。時間をおいて再度お試しください。",
      invalid: "入力内容に誤りがあります。赤い項目を修正してください。",
    },
  },
  common: {
    required: "必須",
    cancel: "キャンセル",
    close: "閉じる",
  },
  format: {
    // 例: format.publishJst("2025/08/19 13:00")
    publishJst: (txt) => `公開日時（JST）: ${txt}`,
  },
};

export default ja;
