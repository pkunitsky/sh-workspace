module.exports = {
  name: 'external',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/external',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
