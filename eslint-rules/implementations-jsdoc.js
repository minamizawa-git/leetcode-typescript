const rule = {
  meta: {
    docs: {
      description: 'アルゴリズム実装ファイルの JSDoc ルール',
    },
    schema: [],
    messages: {
      missingJsdoc: '関数には JSDoc を付けてください。',
    },
  },
  create(context) {
    const sourceCode = context.getSourceCode();

    return {
      FunctionDeclaration(node) {
        const filename = context.getFilename();
        if (!filename.includes('/implementations/')) return;

        const comment = sourceCode.getJSDocComment(node);
        if (!comment) {
          context.report({
            node,
            messageId: 'missingJsdoc',
          });
        }
      },
    };
  },
};

export default rule;
