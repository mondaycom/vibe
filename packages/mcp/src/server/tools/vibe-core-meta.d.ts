// TODO temp workaround for vibe/core/meta to be resolved as a module
interface VibeComponentMetadataItemForDeclaration {
  displayName: string;
  aggregator?: string;
  [key: string]: any;
}

declare module '@vibe/core/meta' {
  const vibeMetadataFromFile: VibeComponentMetadataItemForDeclaration[];
  export default vibeMetadataFromFile;
} 