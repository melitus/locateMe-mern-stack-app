import fileExtension from './fileExtension';

describe('fileExtension', () => {
  describe('when called', () => {
    it('with file name "file.js"', () => {
      expect(fileExtension('file.js')).toBe('.js');
    });
    it('with file name "music.mp4"', () => {
      expect(fileExtension('music.mp4')).toBe('.mp4');
    });
    it('with path to file "/bundle/app.js"', () => {
      expect(fileExtension('/bundle/app.js')).toBe('.js');
    });
  });

  describe('returns empty string when called', () => {
    it('with without file extension "file"', () => {
      expect(fileExtension('file')).toBe('');
    });
  });
});
