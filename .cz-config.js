module.exports = {
  types: [
    {
      value: ':sparkles: feat',
      name: '✨ feat:\tAdding a new feature'
    },
    {
      value: ':bug: fix',
      name: '🐛 fix:\tFixing a bug'
    },
    {
      value: ':memo: docs',
      name: '📝 docs:\tAdd or update documentation'
    },
    {
      value: ':lipstick: style',
      name: '💄 style:\tAdd or update styles, ui or ux',
    },
    {
      value: ':recycle: refactor',
      name: '♻️  refactor:\tCode change that neither fixes a bug nor adds a feature',
    },
    {
      value: ':zap: perf',
      name: '⚡️ perf:\tCode change that improves performance',
    },
    {
      value: ':mag: seo',
      name: '🔍️ seo:\tCode change that improves SEO',
    },
    {
      value: ':lock: security',
      name: '🔒️ security:\tCode change that improves security',
    },
    {
      value: ':white_check_mark: test',
      name: '✅ test:\tAdding tests cases',
    },
    {
      value: ':wrench: config',
      name: '🔧 config:\tAdd or update configuration files',
    },
    {
      value: ':truck: chore',
      name: '🚚 chore:\tChanges to the build process or auxiliary tools\n\t\tand libraries such as documentation generation',
    },
    {
      value: ':rewind: revert',
      name: '⏪️ revert:\tRevert to a commit'
    },
    {
      value: ':construction: wip',
      name: '🚧 wip:\tWork in progress'
    },
    {
      value: ':construction_worker: build',
      name: '👷 build:\tAdd or update regards to build process',
    },
    {
      value: ':green_heart: ci',
      name: '💚 ci:\tAdd or update regards to build process',
    },
  ],

  scopes: [
    { name: 'boilerplate' },
    { name: 'custom scope 1' },
    { name: 'custom scope 2' },
    { name: 'custom scope 3' },
  ],

  scopeOverrides: {
    fix: [{ name: 'merge' }, { name: 'style' }, { name: 'test' }, { name: 'hotfix' }],
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],
  subjectLimit: 100,
};
