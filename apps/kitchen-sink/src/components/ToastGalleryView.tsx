import { Toast, type ToastProps } from "@vibe/core";

type ToastVariation = {
  id: string;
  label: string;
  props: ToastProps;
  message: string;
};

const toastVariations: ToastVariation[] = [
  {
    id: "normal",
    label: "Normal",
    message: "General message toast",
    props: { type: "normal" },
  },
  {
    id: "normal-with-button",
    label: "Normal with button",
    message: "General message toast",
    props: {
      type: "normal",
      actions: [{ type: "button", content: "Button" }],
    },
  },
  {
    id: "normal-with-link",
    label: "Normal with link",
    message: "General message toast",
    props: {
      type: "normal",
      actions: [{ type: "link", text: "Link to action", href: "https://monday.com" }],
    },
  },
  {
    id: "normal-with-button-and-link",
    label: "Normal with button and link",
    message: "General message toast",
    props: {
      type: "normal",
      actions: [
        { type: "button", content: "Undo 5" },
        { type: "link", text: "Lorem ipsum", href: "https://monday.com" },
      ],
    },
  },
  {
    id: "normal-loading",
    label: "Normal with loading",
    message: "General message toast",
    props: { type: "normal", loading: true },
  },
  {
    id: "positive",
    label: "Success (positive)",
    message: "Positive message toast",
    props: {
      type: "positive",
      actions: [{ type: "button", content: "Undo 5" }],
    },
  },
  {
    id: "negative",
    label: "Error (negative)",
    message: "Negative message toast",
    props: {
      type: "negative",
      actions: [{ type: "button", content: "Button" }],
    },
  },
  {
    id: "warning",
    label: "Warning",
    message: "Warning message toast",
    props: {
      type: "warning",
      actions: [{ type: "button", content: "Button" }],
    },
  },
  {
    id: "dark",
    label: "Dark",
    message: "Dark message toast",
    props: {
      type: "dark",
      actions: [{ type: "button", content: "Button" }],
    },
  },
  {
    id: "feedback-loop",
    label: "Feedback loop",
    message: "We successfully deleted 1 item",
    props: {
      type: "positive",
      actions: [{ type: "button", content: "Undo" }],
    },
  },
  {
    id: "no-close-button",
    label: "Without close button",
    message: "General message toast",
    props: { type: "normal", closeable: false },
  },
  {
    id: "no-icon",
    label: "Without icon",
    message: "General message toast",
    props: { type: "normal", hideIcon: true },
  },
];

export function ToastGalleryView() {
  return (
    <div className="toast-gallery">
      <header className="toast-gallery-header">
        <h1 className="toast-gallery-title">Toast</h1>
        <p className="toast-gallery-description">
          Facelift Toast gallery — white surface, semantic icon badges, and Vibe actions.
        </p>
      </header>
      <div className="toast-gallery-grid">
        {toastVariations.map(({ id, label, message, props }) => (
          <article key={id} className="toast-gallery-item">
            <h2 className="toast-gallery-item-label">{label}</h2>
            <div className="toast-gallery-item-preview">
              <Toast {...props} id={`toast-gallery-${id}`} open inline>
                {message}
              </Toast>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
