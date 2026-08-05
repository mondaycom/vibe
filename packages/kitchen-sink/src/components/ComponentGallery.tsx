import type { ReactNode } from "react";

export type GalleryVariation = {
  id: string;
  label: string;
  render: () => ReactNode;
};

type ComponentGalleryProps = {
  title: string;
  description: string;
  variations: GalleryVariation[];
};

export function ComponentGallery({ title, description, variations }: ComponentGalleryProps) {
  return (
    <div className="component-gallery">
      <header className="component-gallery-header">
        <h1 className="component-gallery-title">{title}</h1>
        <p className="component-gallery-description">{description}</p>
      </header>
      <div className="component-gallery-grid">
        {variations.map(({ id, label, render }) => (
          <article key={id} className="component-gallery-item">
            <h2 className="component-gallery-item-label">{label}</h2>
            <div className="component-gallery-item-preview">{render()}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
