export {};

// Tipado para React
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        icon: string;
      };
    }
  }

  // Tipado para Preact
  namespace preact.JSX {
    interface IntrinsicElements {
      "iconify-icon": JSX.HTMLAttributes &
        Record<string, any> & {
          icon: string;
        };
    }
  }
}
