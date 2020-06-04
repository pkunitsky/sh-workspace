module.exports = {
  name: 'sense-hub-api',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/sense-hub-api',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
