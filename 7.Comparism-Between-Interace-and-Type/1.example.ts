type Language = {
  name: string;
  version: string;
  releaseDate: Date;
};

interface AllLangues {
  name: string;
  version: string;
  releaseDate: Date;
  getInfo(): string;
  getReleaseDate: (releaseDate: string) => Date;
}
