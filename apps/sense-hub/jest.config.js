module.exports = {
  name: 'sense-hub',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sense-hub',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
