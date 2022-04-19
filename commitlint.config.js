module.exports = {
  extends: ['gitmoji'],
  rules: {
    'header-max-length': [0, 'always', 100],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'seo',
        'security',
        'test',
        'config',
        'chore',
        'revert',
        'wip',
        'build',
        'ci',
      ],
    ],
  },
}